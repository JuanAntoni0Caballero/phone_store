import { useEffect, useState } from 'react';
import { fetchPhones } from '../../services/phoneService';
import PhoneCard from '../../componets/phoneCard/PhoneCard';
import './Home.css';

export default function Home() {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetchPhones()
            .then(setPhones)
            .catch(err => console.error(err))
    }, []);

    return (
        <div className="card-grid">
            {phones.map(phone => (
                <PhoneCard key={phone.id} phone={phone} />
            ))}
        </div>
    );
}
