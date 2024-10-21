# Supabase Setup

This app uses Supabase as the backend service to store your books and ratings.

## Steps to Set Up Supabase

1. Go to [Supabase](https://supabase.io) and create a new project.
2. Once your project is created, go to the Project Settings and get your API URL and Anon Key.
3. Replace `YOUR_SUPABASE_URL` and `YOUR_SUPABASE_ANON_KEY` in the `.env` file with your project's credentials.

## Setting Up the Database Schema

Use the following SQL to create the `books` table in your Supabase database:

```sql
create table books (
  id bigint generated always as identity primary key,
  title text not null,
  author text not null,
  score integer not null check (score >= 1 and score <= 5),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

## Enabling Row Level Security (RLS)

Ensure that anonymous users can read and write to the `books` table.

1. Go to the `books` table in the Supabase dashboard.
2. Enable Row Level Security (RLS).
3. Add the following policies:

### Enable read access to all users

```sql
create policy "Allow read access" on public.books
  for select
  using (true);
```

### Enable insert access to all users

```sql
create policy "Allow insert access" on public.books
  for insert
  with check (true);
```

## Environment Variables

Make sure the following environment variables are set in your `.env` file:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`