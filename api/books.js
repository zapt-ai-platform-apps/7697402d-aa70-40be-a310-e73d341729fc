import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { books } from '../drizzle/schema';
import { json } from 'micro';
import { desc } from 'drizzle-orm';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const db = drizzle(pool);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await db.select().from(books).orderBy(desc(books.createdAt));
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch books' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, author, score } = await json(req);
      await db.insert(books).values({
        title,
        author,
        score,
      });
      res.status(201).json({ message: 'Book added' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add book' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}