import * as process from 'process';

export const env = {
  port: process.env.PORT || 5000,
  databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017'
};
