const mongoose = require('mongoose');
const env = require('./env');

async function connectDb(uri = env.mongoUri) {
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri);

  const { host, name } = mongoose.connection;
  console.log(`MongoDB connected: ${host}/${name}`);

  return mongoose.connection;
}

async function disconnectDb() {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
}

module.exports = {
  connectDb,
  disconnectDb,
};
