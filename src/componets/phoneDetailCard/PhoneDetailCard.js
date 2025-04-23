import './PhoneDetailCard.css';

export default function PhoneDetailCard({ phone }) {
    return (
        <div>
            <h1 className="title">{phone.brand} {phone.model}</h1>
            <p className="price">{phone.price}€</p>

            <div className="specs">
                <p><strong>CPU:</strong> {phone.cpu}</p>
                <p><strong>RAM:</strong> {phone.ram}</p>
                <p><strong>Sistema Operativo:</strong> {phone.os}</p>
                <p><strong>Pantalla:</strong> {phone.displayResolution}</p>
                <p><strong>Batería:</strong> {phone.battery}</p>
                <p><strong>Cámaras:</strong> {phone.primaryCamera} / {phone.secondaryCamera}</p>
                <p><strong>Dimensiones:</strong> {phone.dimentions}</p>
                <p><strong>Peso:</strong> {phone.weight}</p>
            </div>
        </div>
    )
};