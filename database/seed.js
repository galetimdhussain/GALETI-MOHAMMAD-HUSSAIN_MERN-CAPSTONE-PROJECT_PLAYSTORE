const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '..', 'backend', '.env') });

const { connectDb, disconnectDb } = require('../backend/config/db');
const { ensureDefaultCategories } = require('../backend/services/categoryService');
const User = require('../backend/models/User');
const Category = require('../backend/models/Category');
const Application = require('../backend/models/Application');
const Review = require('../backend/models/Review');
const Download = require('../backend/models/Download');
const Notification = require('../backend/models/Notification');

async function seed() {
  await connectDb();
  await ensureDefaultCategories();

  await Promise.all([
    User.deleteMany({}),
    Application.deleteMany({}),
    Review.deleteMany({}),
    Download.deleteMany({}),
    Notification.deleteMany({}),
  ]);

  const [owner, ownerTwo, user, userTwo] = await User.create([
    {
      name: 'Rahul Dev Studio',
      email: 'owner@playstore.dev',
      password: 'Password123',
      role: 'owner',
    },
    {
      name: 'Nova Apps Lab',
      email: 'owner2@playstore.dev',
      password: 'Password123',
      role: 'owner',
    },
    {
      name: 'Asha Sharma',
      email: 'user@playstore.dev',
      password: 'Password123',
      role: 'user',
    },
    {
      name: 'Kiran Patel',
      email: 'user2@playstore.dev',
      password: 'Password123',
      role: 'user',
    },
  ]);

  const categories = await Category.find({});
  const categoryMap = Object.fromEntries(categories.map((category) => [category.slug, category]));

  const apps = await Application.create([
    {
      name: 'WhatsApp',
      description: 'Instant messaging platform for chats, calls, media sharing, and cross-device communication.',
      version: '2.26.4',
      releaseDate: new Date('2026-02-10'),
      category: categoryMap.social._id,
      genre: 'Messaging',
      rating: 4.8,
      averageRating: 4.8,
      visibility: 'public',
      ownerId: owner._id,
      iconUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80',
      featureHighlights: ['Encrypted chat', 'Voice and video calls', 'File sharing'],
      reviewCount: 2,
      downloadCount: 2,
      lastAnnouncement: 'Improved call stability and faster media sync.',
    },
    {
      name: 'PUBG Mobile',
      description: 'Battle royale shooter with multiplayer squads, ranked matches, and seasonal maps.',
      version: '3.2.0',
      releaseDate: new Date('2026-02-24'),
      category: categoryMap.games._id,
      genre: 'Battle Royale',
      rating: 4.7,
      averageRating: 4.7,
      visibility: 'public',
      ownerId: owner._id,
      iconUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
      featureHighlights: ['Squad mode', 'Tournament ready', 'Season rewards'],
      reviewCount: 2,
      downloadCount: 2,
      lastAnnouncement: 'New arena mode and smoother matchmaking are now live.',
    },
    {
      name: 'FitBloom',
      description: 'Women-focused wellness companion for workouts, hydration, recovery, and habit tracking.',
      version: '2.1.0',
      releaseDate: new Date('2026-02-10'),
      category: categoryMap.health._id,
      genre: 'Wellness',
      rating: 4.6,
      averageRating: 4.6,
      visibility: 'public',
      ownerId: owner._id,
      iconUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
      featureHighlights: ['Guided plans', 'Daily reminders', 'Mood tracking'],
      reviewCount: 1,
      downloadCount: 1,
      lastAnnouncement: 'New guided breathing sessions are now available.',
    },
    {
      name: 'Nykaa Beauty',
      description: 'Beauty shopping and discovery experience with curated collections, offers, and tutorials.',
      version: '5.4.2',
      releaseDate: new Date('2026-01-28'),
      category: categoryMap.beauty._id,
      genre: 'Beauty Commerce',
      rating: 4.4,
      averageRating: 4.4,
      visibility: 'public',
      ownerId: owner._id,
      iconUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
      featureHighlights: ['Personalized picks', 'Flash offers', 'Beauty tips'],
      reviewCount: 1,
      downloadCount: 1,
      lastAnnouncement: 'Skincare bundles and festive deals have been refreshed.',
    },
    {
      name: 'Myntra',
      description: 'Fashion-first shopping platform for apparel, footwear, accessories, and style curation.',
      version: '4.9.1',
      releaseDate: new Date('2026-02-18'),
      category: categoryMap.fashion._id,
      genre: 'Shopping',
      rating: 4.5,
      averageRating: 4.5,
      visibility: 'public',
      ownerId: owner._id,
      iconUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80',
      featureHighlights: ['Trend boards', 'Size guidance', 'Wishlist sync'],
      reviewCount: 1,
      downloadCount: 1,
      lastAnnouncement: 'Fresh spring collections are available now.',
    },
    {
      name: 'SheCare Plus',
      description: 'Women health and self-care application for cycle insights, consultations, and reminders.',
      version: '1.6.3',
      releaseDate: new Date('2026-02-02'),
      category: categoryMap.women._id,
      genre: 'Self Care',
      rating: 4.7,
      averageRating: 4.7,
      visibility: 'public',
      ownerId: owner._id,
      iconUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
      featureHighlights: ['Cycle insights', 'Wellness reminders', 'Private journal'],
      reviewCount: 1,
      downloadCount: 1,
      lastAnnouncement: 'Personal wellness reminders are now customizable.',
    },
    {
      name: 'HealthifyMe',
      description: 'Nutrition and fitness tracking with calorie logging, coach plans, and progress monitoring.',
      version: '16.1.0',
      releaseDate: new Date('2026-01-16'),
      category: categoryMap.health._id,
      genre: 'Nutrition',
      rating: 4.3,
      averageRating: 4.3,
      visibility: 'public',
      ownerId: owner._id,
      iconUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
      featureHighlights: ['Meal logging', 'Coach plans', 'Progress dashboard'],
      reviewCount: 1,
      downloadCount: 1,
      lastAnnouncement: 'Food scan improvements are live in the latest release.',
    },
    {
      name: 'TechPulse IDE',
      description: 'Mobile-first developer workspace for code snippets, release notes, and API collections.',
      version: '1.4.0',
      releaseDate: new Date('2026-03-06'),
      category: categoryMap.technology._id,
      genre: 'Developer Tools',
      rating: 4.6,
      averageRating: 4.6,
      visibility: 'public',
      ownerId: owner._id,
      iconUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
      featureHighlights: ['Snippet vault', 'API runner', 'Dark terminal mode'],
      reviewCount: 0,
      downloadCount: 0,
      lastAnnouncement: 'REST collections now support saved environments.',
    },
    {
      name: 'StyleSphere',
      description: 'Fashion discovery app for outfit inspiration, wishlists, and seasonal looks.',
      version: '1.8.4',
      releaseDate: new Date('2026-01-19'),
      category: categoryMap.fashion._id,
      genre: 'Lifestyle',
      rating: 4.2,
      averageRating: 4.2,
      visibility: 'public',
      ownerId: ownerTwo._id,
      iconUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
      featureHighlights: ['Trend boards', 'Smart styling', 'Season picks'],
      reviewCount: 1,
      downloadCount: 1,
      lastAnnouncement: 'Spring trend previews are live now.',
    },
    {
      name: 'ChatLoop',
      description: 'Community-based social platform for group rooms, voice spaces, and event sharing.',
      version: '2.3.7',
      releaseDate: new Date('2026-03-01'),
      category: categoryMap.social._id,
      genre: 'Community',
      rating: 4.4,
      averageRating: 4.4,
      visibility: 'public',
      ownerId: ownerTwo._id,
      iconUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
      featureHighlights: ['Live rooms', 'Shared events', 'Pinned communities'],
      reviewCount: 1,
      downloadCount: 1,
      lastAnnouncement: 'Voice spaces now support hosts and co-hosts.',
    },
    {
      name: 'CodeForge Studio',
      description: 'Productivity suite for product teams to track releases, specs, and deployment checklists.',
      version: '3.0.1',
      releaseDate: new Date('2026-02-26'),
      category: categoryMap.technology._id,
      genre: 'Productivity',
      rating: 4.8,
      averageRating: 4.8,
      visibility: 'public',
      ownerId: ownerTwo._id,
      iconUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
      featureHighlights: ['Release boards', 'Sprint tracking', 'Team notes'],
      reviewCount: 1,
      downloadCount: 1,
      lastAnnouncement: 'Release approval workflows were improved this week.',
    },
    {
      name: 'Galaxy Racers',
      description: 'Arcade space racing game with tournaments and weekly reward drops.',
      version: '3.0.0',
      releaseDate: new Date('2026-03-01'),
      category: categoryMap.games._id,
      genre: 'Arcade',
      rating: 4.1,
      averageRating: 4.1,
      visibility: 'hidden',
      ownerId: ownerTwo._id,
      iconUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
      featureHighlights: ['Multiplayer', 'Event leaderboard', 'Weekly rewards'],
      reviewCount: 0,
      downloadCount: 0,
      lastAnnouncement: '',
    },
  ]);

  await Review.create([
    {
      userId: user._id,
      appId: apps[0]._id,
      rating: 5,
      comment: 'Fast, reliable, and very easy to use with friends and family.',
    },
    {
      userId: userTwo._id,
      appId: apps[0]._id,
      rating: 4,
      comment: 'Clean interface and stable voice calls across devices.',
    },
    {
      userId: user._id,
      appId: apps[1]._id,
      rating: 5,
      comment: 'Great graphics and smooth gameplay in team matches.',
    },
    {
      userId: userTwo._id,
      appId: apps[1]._id,
      rating: 4,
      comment: 'The seasonal updates keep the experience fresh.',
    },
    {
      userId: user._id,
      appId: apps[2]._id,
      rating: 5,
      comment: 'Excellent wellness tracking and easy to use every day.',
    },
    {
      userId: user._id,
      appId: apps[3]._id,
      rating: 4,
      comment: 'Good offers and a polished beauty discovery flow.',
    },
    {
      userId: userTwo._id,
      appId: apps[4]._id,
      rating: 5,
      comment: 'Good collections and smooth browsing across categories.',
    },
    {
      userId: user._id,
      appId: apps[5]._id,
      rating: 5,
      comment: 'Helpful reminders and a privacy-friendly design.',
    },
    {
      userId: userTwo._id,
      appId: apps[6]._id,
      rating: 4,
      comment: 'Useful health insights and a strong daily tracker.',
    },
    {
      userId: user._id,
      appId: apps[8]._id,
      rating: 4,
      comment: 'The styling suggestions feel practical and well organized.',
    },
    {
      userId: userTwo._id,
      appId: apps[9]._id,
      rating: 4,
      comment: 'Community spaces are responsive and simple to manage.',
    },
    {
      userId: user._id,
      appId: apps[10]._id,
      rating: 5,
      comment: 'Excellent release planning workflows for small product teams.',
    },
  ]);

  await Download.create([
    { userId: user._id, appId: apps[0]._id },
    { userId: userTwo._id, appId: apps[0]._id },
    { userId: user._id, appId: apps[1]._id },
    { userId: userTwo._id, appId: apps[1]._id },
    { userId: user._id, appId: apps[2]._id },
    { userId: user._id, appId: apps[3]._id },
    { userId: userTwo._id, appId: apps[4]._id },
    { userId: user._id, appId: apps[5]._id },
    { userId: userTwo._id, appId: apps[6]._id },
    { userId: user._id, appId: apps[8]._id },
    { userId: userTwo._id, appId: apps[9]._id },
    { userId: user._id, appId: apps[10]._id },
  ]);

  await User.findByIdAndUpdate(user._id, {
    subscribedApps: [apps[0]._id, apps[1]._id, apps[2]._id, apps[3]._id, apps[8]._id, apps[10]._id],
  });

  await User.findByIdAndUpdate(userTwo._id, {
    subscribedApps: [apps[0]._id, apps[1]._id, apps[4]._id, apps[6]._id, apps[9]._id],
  });

  await Notification.create([
    {
      recipientId: owner._id,
      recipientRole: 'owner',
      type: 'app_downloaded',
      title: 'New app download',
      message: 'Asha Sharma downloaded WhatsApp.',
      relatedAppId: apps[0]._id,
    },
    {
      recipientId: owner._id,
      recipientRole: 'owner',
      type: 'app_downloaded',
      title: 'New app download',
      message: 'Kiran Patel downloaded PUBG Mobile.',
      relatedAppId: apps[1]._id,
    },
    {
      recipientId: user._id,
      recipientRole: 'user',
      type: 'app_updated',
      title: 'WhatsApp has a new update',
      message: 'Rahul Dev Studio published version 2.26.4 with improved call stability.',
      relatedAppId: apps[0]._id,
    },
    {
      recipientId: userTwo._id,
      recipientRole: 'user',
      type: 'app_updated',
      title: 'PUBG Mobile has a new update',
      message: 'Rahul Dev Studio published a new arena mode and smoother matchmaking.',
      relatedAppId: apps[1]._id,
    },
  ]);

  console.log('Seed completed successfully.');
  console.log('Owner login: owner@playstore.dev / Password123');
  console.log('Second owner login: owner2@playstore.dev / Password123');
  console.log('User login: user@playstore.dev / Password123');
  console.log('Second user login: user2@playstore.dev / Password123');

  await disconnectDb();
}

seed().catch(async (error) => {
  console.error('Seed failed', error);
  await disconnectDb();
  process.exit(1);
});
