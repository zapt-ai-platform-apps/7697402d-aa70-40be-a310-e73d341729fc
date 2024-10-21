import { createSignal, onMount, Show, For } from 'solid-js';
import { supabase } from '../supabaseClient';

function Home() {
  const [books, setBooks] = createSignal([]);
  const [loading, setLoading] = createSignal(true);

  onMount(async () => {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      console.error(error);
    } else {
      setBooks(data);
    }
    setLoading(false);
  });

  return (
    <div>
      <h1 class="text-2xl font-bold mb-4">Books I've Read</h1>
      <Show when={loading()}>
        <p>Loading...</p>
      </Show>
      <Show when={!loading() && books().length > 0}>
        <ul>
          <For each={books()}>
            {(book) => (
              <li class="mb-2 p-4 bg-white shadow">
                <h2 class="text-xl font-semibold">{book.title}</h2>
                <p class="text-gray-600">{book.author}</p>
              </li>
            )}
          </For>
        </ul>
      </Show>
      <Show when={!loading() && books().length === 0}>
        <p>You have not added any books yet.</p>
      </Show>
    </div>
  );
}

export default Home;