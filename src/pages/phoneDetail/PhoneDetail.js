import './PhoneDetail.css';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPhoneById } from '../../services/phoneService';
import Button from '../../componets/button/Button';
import Selector from '../../componets/selector/Selector';
import PhoneDetailCard from '../../componets/phoneDetailCard/PhoneDetailCard';
import { useCart } from '../../context/CartContext';

export default function PhoneDetail() {
    const { id } = useParams();
    const [phone, setPhone] = useState(null);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedStorage, setSelectedStorage] = useState('');
    const { addToCart } = useCart();

    useEffect(() => {
        fetchPhoneById(id)
            .then(data => {
                setPhone(data);
                setSelectedColor(data.options.colors[0]?.code);
                setSelectedStorage(data.options.storages[0]?.code);
            });
    }, [id]);


    const handleAddToCart = () => {
        addToCart(id, selectedColor, selectedStorage);
    };

    return (
        <div className='phone-detail-container'>
            {!phone ? (
                <div className='loading'>
                    <h1>Cargando...</h1>
                </div>
            ) :
                <>
                    <div className='image-column'>
                        <img src={phone.imgUrl} alt={phone.model} />
                    </div>

                    <div className='details-column'>
                        <div className='details-grup'>
                            <Link to='/' className='back-link'>← Volver a la lista</Link>
                            <PhoneDetailCard phone={phone} />
                        </div>

                        <div className='actions-grup'>
                            <div className='select-group'>
                                <Selector
                                    label='Color'
                                    options={phone.options.colors}
                                    value={selectedColor}
                                    onChange={setSelectedColor}
                                />

                                <Selector
                                    label='Almacenamiento'
                                    options={phone.options.storages}
                                    value={selectedStorage}
                                    onChange={setSelectedStorage}
                                />
                            </div>
                            <div className='button-group'>
                                <Button onClick={handleAddToCart} children='Añadir a la cesta' />
                            </div>
                        </div>
                    </div>
                </>}
        </div>
    );

};
