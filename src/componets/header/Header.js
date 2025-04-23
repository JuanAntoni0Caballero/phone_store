import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const location = useLocation();

    const getBreadcrumb = () => {
        if (location.pathname === '/') return 'Home';
        if (location.pathname.startsWith('/detalle/')) return 'Detalle';
        return 'Página';
    };

    return (
        <header className="header">
            <div className="logo">
                <h1>
                    <Link to="/">📱 Phone Store</Link>
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
                🛒 (10)
            </div>
        </header>
    );
}
