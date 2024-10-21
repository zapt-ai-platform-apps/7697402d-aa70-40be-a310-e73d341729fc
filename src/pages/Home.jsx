import { createSignal, onMount, Show, For } from 'solid-js';
import Star from '../components/Star';

function Home() {
  const [books, setBooks] = createSignal([]);
  const [loading, setLoading] = createSignal(true);

  onMount(async () => {
    try {
      const response = await fetch('/api/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  });

  const renderStars = (score) => {
    return (
      <div class="flex">
        <For each={[1, 2, 3, 4, 5]}>
          {(i) => <Star filled={i <= score} />}
        </For>
      </div>
    );
  };

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
              <li class="mb-4 p-4 bg-white rounded shadow">
                <h2 class="text-xl font-semibold text-blue-700">{book.title}</h2>
                <p class="text-gray-600 mb-2">{book.author}</p>
                {renderStars(book.score)}
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