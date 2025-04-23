import AppRouter from './routes/AppRouter';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Phone Store</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/detalle/1">Phone Detail</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <AppRouter />
      </main>
    </>
  );
}

export default App;
