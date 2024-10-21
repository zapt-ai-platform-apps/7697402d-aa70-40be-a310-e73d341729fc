import { Routes, Route, Link } from '@solidjs/router';
import Home from './pages/Home';
import AddBook from './pages/AddBook';

function App() {
  return (
    <div class="min-h-screen bg-gradient-to-b from-blue-200 to-purple-200">
      <nav class="bg-gradient-to-r from-green-400 to-blue-500 shadow mb-8">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
          <div>
            <Link href="/" class="text-white text-xl font-bold">
              What Books Have I Read
            </Link>
          </div>
          <div>
            <Link href="/" class="text-white hover:text-yellow-200 mx-4">
              Home
            </Link>
            <Link href="/add" class="text-white hover:text-yellow-200 mx-4">
              Add Book
            </Link>
          </div>
        </div>
      </nav>
      <main class="container mx-auto px-6 pb-6">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/add" component={AddBook} />
        </Routes>
      </main>
    </div>
  );
}

export default App;