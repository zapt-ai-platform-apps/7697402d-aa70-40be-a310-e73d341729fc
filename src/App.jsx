import { Routes, Route, Link } from '@solidjs/router';
import Home from './pages/Home';
import AddBook from './pages/AddBook';

function App() {
  return (
    <div class="min-h-screen bg-gray-100">
      <nav class="bg-white shadow mb-8">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
          <div>
            <Link href="/" class="text-gray-800 text-xl font-bold">
              What Books Have I Read
            </Link>
          </div>
          <div>
            <Link href="/" class="text-gray-600 hover:text-blue-500 mx-4">
              Home
            </Link>
            <Link href="/add" class="text-gray-600 hover:text-blue-500 mx-4">
              Add Book
            </Link>
          </div>
        </div>
      </nav>
      <main class="container mx-auto px-6">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/add" component={AddBook} />
        </Routes>
      </main>
    </div>
  );
}

export default App;