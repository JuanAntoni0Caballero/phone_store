import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { useCart } from '../../context/CartContext';

export default function Header() {
    const location = useLocation();
    const { cartCount } = useCart();

    const getBreadcrumb = () => {
        if (location.pathname === '/') return 'Home';
        if (location.pathname.startsWith('/detalles/')) return 'Detalle';
        return 'Página';
    };

    return (
        <header>
            <div className='desktop-header'>
                <div className="logo">
                    <h1>
                        <Link to="/">Phone Store</Link>
                    </h1>
                </div>

                <div className="links">
                    <nav>
                        <span>
                            <Link to="/">Home</Link> / {getBreadcrumb()}
                        </span>
                    </nav>
                </div>

                <div className="cart">
                    🛒 ({cartCount})
                </div>
            </div>

            <div className='mobile-header'>
                <div className="logo">
                    <h1>
                        <Link to="/">Phone Store</Link>
                    </h1>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="links">
                        <nav>
                            <span>
                                <Link to="/">Home</Link> / {getBreadcrumb()}
                            </span>
                        </nav>
                    </div>

                    <div className="cart">
                        🛒 ({cartCount})
                    </div>
                </div>
            </div>
        </header>
    );
}
