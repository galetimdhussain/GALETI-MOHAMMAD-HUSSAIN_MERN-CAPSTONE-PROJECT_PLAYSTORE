const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const appRoutes = require('./routes/appRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const downloadRoutes = require('./routes/downloadRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const userRoutes = require('./routes/userRoutes');
const env = require('./config/env');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');

const app = express();

app.use(
  cors({
    origin: env.clientUrl,
    credentials: true,
  })
);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(morgan(env.nodeEnv === 'production' ? 'combined' : 'dev'));

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Play Store backend is running.',
    data: {
      apiBase: '/api',
      health: '/api/health',
      auth: '/api/auth',
      apps: '/api/apps',
      categories: '/api/categories',
      reviews: '/api/reviews',
      downloads: '/api/downloads',
      notifications: '/api/notifications',
      users: '/api/users',
    },
  });
});

app.get('/api', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Play Store API root.',
    data: {
      health: '/api/health',
      authentication: [
        'POST /api/auth/register',
        'POST /api/auth/login',
        'POST /api/auth/logout',
        'GET /api/auth/me',
      ],
      applications: [
        'GET /api/apps',
        'GET /api/apps/search',
        'GET /api/apps/:id',
        'POST /api/apps',
        'PUT /api/apps/:id',
        'PATCH /api/apps/:id/visibility',
        'DELETE /api/apps/:id',
      ],
      users: [
        'GET /api/users',
        'PUT /api/users/:id/role',
        'DELETE /api/users/:id',
      ],
    },
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'Play Store API is running.' });
});

app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/apps', appRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/downloads', downloadRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
