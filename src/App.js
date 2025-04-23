import AppRouter from './routes/AppRouter';
import Header from './componets/header/Header';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <AppRouter />
      </main>
    </CartProvider>
  );
}

export default App;
