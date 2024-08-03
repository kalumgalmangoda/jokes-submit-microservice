import * as dotenv from 'dotenv';
dotenv.config();

export default () => ({
  environment: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3001,
  frontendAppUrl: process.env.FRONTEND_APP_URL || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
  },
});
