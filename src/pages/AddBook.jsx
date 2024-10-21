import { createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';

function AddBook() {
  const [title, setTitle] = createSignal('');
  const [author, setAuthor] = createSignal('');
  const [score, setScore] = createSignal(5);
  const [loading, setLoading] = createSignal(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading()) return;
    setLoading(true);
    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title(),
          author: author(),
          score: score(),
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add book');
      }
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 class="text-2xl font-bold mb-4">Add a New Book</h1>
      <form onSubmit={handleSubmit} class="space-y-4">
        <div>
          <label class="block text-gray-700">Title</label>
          <input
            type="text"
            value={title()}
            onInput={(e) => setTitle(e.target.value)}
            class="w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div>
          <label class="block text-gray-700">Author</label>
          <input
            type="text"
            value={author()}
            onInput={(e) => setAuthor(e.target.value)}
            class="w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div>
          <label class="block text-gray-700">Rating</label>
          <select
            value={score()}
            onChange={(e) => setScore(parseInt(e.target.value))}
            class="w-full mt-1 p-2 border rounded"
            required
          >
            <option value="5">5 - ★★★★★</option>
            <option value="4">4 - ★★★★☆</option>
            <option value="3">3 - ★★★☆☆</option>
            <option value="2">2 - ★★☆☆☆</option>
            <option value="1">1 - ★☆☆☆☆</option>
          </select>
        </div>
        <button
          type="submit"
          class="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
          disabled={loading()}
        >
          {loading() ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
}

export default AddBook;