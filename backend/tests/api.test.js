const path = require('path');

process.env.MONGOMS_DOWNLOAD_DIR = path.join(__dirname, '.cache', 'mongodb-binaries');

jest.setTimeout(60000);

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../app');
const { connectDb, disconnectDb } = require('../config/db');
const { ensureDefaultCategories } = require('../services/categoryService');
const Category = require('../models/Category');
const Notification = require('../models/Notification');

let mongoServer;
let usingMemoryServer = false;

beforeAll(async () => {
  try {
    mongoServer = await MongoMemoryServer.create({
      instance: {
        startupTimeout: 30000,
      },
    });
    usingMemoryServer = true;
    await connectDb(mongoServer.getUri());
  } catch (error) {
    usingMemoryServer = false;
    await connectDb(process.env.TEST_MONGODB_URI || 'mongodb://127.0.0.1:27017/playstore_capstone_test');
  }

  await ensureDefaultCategories();
});

afterAll(async () => {
  if (!usingMemoryServer && mongoose.connection.db) {
    await mongoose.connection.db.dropDatabase();
  }

  await disconnectDb();
  if (mongoServer) {
    await mongoServer.stop();
  }
});

beforeEach(async () => {
  const collections = Object.values(mongoose.connection.collections);
  for (const collection of collections) {
    if (collection.collectionName !== 'categories') {
      await collection.deleteMany({});
    }
  }
});

describe('Play Store API flow', () => {
  it('registers users, lets owners create apps, and lets users review and download them', async () => {
    const ownerRegister = await request(app).post('/api/auth/register').send({
      name: 'Owner One',
      email: 'owner@example.com',
      password: 'Password123',
      role: 'owner',
    });

    expect(ownerRegister.statusCode).toBe(201);
    const ownerToken = ownerRegister.body.data.token;

    const userRegister = await request(app).post('/api/auth/register').send({
      name: 'User One',
      email: 'user@example.com',
      password: 'Password123',
      role: 'user',
    });

    expect(userRegister.statusCode).toBe(201);
    const userToken = userRegister.body.data.token;

    const logoutResponse = await request(app)
      .post('/api/auth/logout')
      .set('Authorization', `Bearer ${userToken}`);

    expect(logoutResponse.statusCode).toBe(200);
    expect(logoutResponse.body.message).toBe('Logout successful.');

    const gamesCategory = await Category.findOne({ slug: 'games' });

    const createAppResponse = await request(app)
      .post('/api/apps')
      .set('Authorization', `Bearer ${ownerToken}`)
      .send({
        name: 'Battle Forge',
        description: 'Competitive mobile strategy with team-based battle arenas.',
        version: '1.0.0',
        releaseDate: '2026-03-13',
        category: String(gamesCategory._id),
        genre: 'Strategy',
        iconUrl: 'https://example.com/icon.png',
        featureHighlights: ['Ranked matches', 'Guild chat'],
      });

    expect(createAppResponse.statusCode).toBe(201);
    const appId = createAppResponse.body.data.id;

    const reviewResponse = await request(app)
      .post('/api/reviews')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        appId,
        rating: 5,
        comment: 'Smooth gameplay and very polished UI.',
      });

    expect(reviewResponse.statusCode).toBe(201);

    const downloadResponse = await request(app)
      .post('/api/downloads')
      .set('Authorization', `Bearer ${userToken}`)
      .send({ appId });

    expect(downloadResponse.statusCode).toBe(201);

    const ownerNotifications = await request(app)
      .get('/api/notifications')
      .set('Authorization', `Bearer ${ownerToken}`);

    expect(ownerNotifications.statusCode).toBe(200);
    expect(ownerNotifications.body.data.length).toBe(1);
    expect(ownerNotifications.body.data[0].type).toBe('app_downloaded');

    const appDetails = await request(app).get(`/api/apps/${appId}`);
    expect(appDetails.statusCode).toBe(200);
    expect(appDetails.body.data.reviewCount).toBe(1);
    expect(appDetails.body.data.downloadCount).toBe(1);
    expect(appDetails.body.data.rating).toBe(5);
  });

  it('announces updates to subscribed users', async () => {
    const ownerRegister = await request(app).post('/api/auth/register').send({
      name: 'Owner Two',
      email: 'owner2@example.com',
      password: 'Password123',
      role: 'owner',
    });
    const ownerToken = ownerRegister.body.data.token;

    const userRegister = await request(app).post('/api/auth/register').send({
      name: 'User Two',
      email: 'user2@example.com',
      password: 'Password123',
      role: 'user',
    });
    const userToken = userRegister.body.data.token;

    const gamesCategory = await Category.findOne({ slug: 'games' });

    const createAppResponse = await request(app)
      .post('/api/apps')
      .set('Authorization', `Bearer ${ownerToken}`)
      .send({
        name: 'Puzzle Orbit',
        description: 'Fast puzzle solving game with daily level challenges.',
        version: '1.0.0',
        releaseDate: '2026-03-13',
        category: String(gamesCategory._id),
        genre: 'Puzzle',
      });

    const appId = createAppResponse.body.data.id;

    await request(app)
      .post('/api/downloads')
      .set('Authorization', `Bearer ${userToken}`)
      .send({ appId });

    const updateResponse = await request(app)
      .post(`/api/apps/${appId}/announce-update`)
      .set('Authorization', `Bearer ${ownerToken}`)
      .send({
        version: '1.1.0',
        message: 'This update adds new challenge levels and performance fixes.',
      });

    expect(updateResponse.statusCode).toBe(200);

    const notifications = await Notification.find({});
    expect(notifications.length).toBeGreaterThanOrEqual(2);

    const userNotifications = await request(app)
      .get('/api/notifications')
      .set('Authorization', `Bearer ${userToken}`);

    expect(userNotifications.statusCode).toBe(200);
    expect(userNotifications.body.data[0].type).toBe('app_updated');
  });
});
