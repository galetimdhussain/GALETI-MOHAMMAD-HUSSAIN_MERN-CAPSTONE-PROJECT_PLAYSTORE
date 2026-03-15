const app = require('./app');
const env = require('./config/env');
const { connectDb } = require('./config/db');
const { ensureDefaultCategories } = require('./services/categoryService');

async function startServer() {
  try {
    await connectDb();
    await ensureDefaultCategories();

    app.listen(env.port, () => {
      console.log(`Backend server running on port ${env.port}`);
      console.log(`API root: http://localhost:${env.port}/api`);
      console.log(`Health check: http://localhost:${env.port}/api/health`);
    });
  } catch (error) {
    console.error('Failed to start server', error);
    process.exit(1);
  }
}

startServer();
