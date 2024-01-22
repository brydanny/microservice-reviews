import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mongo: {
      dbName: process.env.MONGO_DB || 'review-db',
      user: process.env.MONGO_INITDB_ROOT_USERNAME || 'root',
      password: process.env.MONGO_INITDB_ROOT_PASSWORD || 'root',
      port: parseInt(process.env.MONGO_PORT, 10) || 27017,
      host: process.env.MONGO_HOST || 'localhost',
      connection: process.env.MONGO_CONNECTION || 'mongodb',
    },
  };
});
