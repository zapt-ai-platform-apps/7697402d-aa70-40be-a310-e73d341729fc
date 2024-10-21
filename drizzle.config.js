import * as dotenv from 'dotenv';
dotenv.config();

export default {
  schema: "./drizzle/schema.js",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
};