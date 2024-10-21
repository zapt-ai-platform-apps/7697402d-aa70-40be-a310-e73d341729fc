# Supabase Setup

This app uses Supabase as the backend service to store your books and ratings. The database schema is defined and managed using Drizzle ORM.

## Steps to Set Up Supabase

1. Go to [Supabase](https://supabase.io) and create a new project.
2. Once your project is created, navigate to the **Settings** tab in your project dashboard.
3. Under **Database** settings, find your **Connection string**. It should look something like:
   ```
   postgres://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
   ```
4. Replace `YOUR_SUPABASE_DATABASE_URL` in the `.env` file with your actual connection string from Supabase.
   - **Note:** If you do not know your database password, you can reset it in the Supabase dashboard under **Settings > Database > Password**.

## Drizzle ORM Configuration

Drizzle ORM will handle the creation of the database schema and migrations.

### Steps:

1. Ensure that `drizzle.config.js` is correctly configured with your database connection details.
2. Run migrations to set up the database schema:
   ```
   npm run db:generate
   npm run db:push
   ```
   - The `db:generate` script will generate migration files based on your schema defined in `drizzle/schema.js`.
   - The `db:push` script will apply these migrations to your Supabase database.

## Environment Variables

Make sure the following environment variables are set in your `.env` file:

- `DATABASE_URL`

## External Manual Steps

- **Enable SSL Connections:**
  - Supabase requires SSL connections. In your `drizzle.config.js` and database connection configuration, ensure that SSL is enabled with `rejectUnauthorized: false`.

- **Database Password:**
  - If you haven't set a password for your Supabase database, you need to set it in the Supabase dashboard under **Settings > Database > Password**.

- **Update Vercel Environment Variables:**
  - In your Vercel dashboard, set the `DATABASE_URL` environment variable for your project to ensure the backend functions can connect to your Supabase database in production.