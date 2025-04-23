import { Link } from 'react-router-dom';
import './PhoneCard.css';

export default function PhoneCard({ phone }) {
    return (
        <Link to={`/detalles/${phone.id}`} className="phone-card">
            <img src={phone.imgUrl} alt={phone.brand} />
            <h3>{phone.brand}</h3>
            <p>{phone.model}</p>
            <p className="price">Price: ${phone.price}</p>
        </Link>
    );
}
