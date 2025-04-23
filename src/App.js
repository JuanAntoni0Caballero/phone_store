import AppRouter from './routes/AppRouter';
import Header from './componets/header/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
    </>
  );
}

export default App;
