import { createSignal } from 'solid-js';
import { supabase } from '../supabaseClient';
import { useNavigate } from '@solidjs/router';

function AddBook() {
  const [title, setTitle] = createSignal('');
  const [author, setAuthor] = createSignal('');
  const [loading, setLoading] = createSignal(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading()) return;
    setLoading(true);
    const { error } = await supabase.from('books').insert([
      {
        title: title(),
        author: author(),
      },
    ]);
    setLoading(false);
    if (error) {
      console.error(error);
    } else {
      navigate('/');
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
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded"
          disabled={loading()}
        >
          {loading() ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
}

export default AddBook;