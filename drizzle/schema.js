import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm-pg';

export const books = pgTable('books', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  score: integer('score').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});