import { useEffect, useState } from 'react';
import { fetchPhones } from '../../services/phoneService';

export default function Home() {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetchPhones()
            .then(data => setPhones(data))
            .catch(err => console.error(err))
    }, []);


    return (
        <div>
            <h2>Catálogo de móviles</h2>
            <ul>
                {phones.map(phone => (
                    <li key={phone.id}>{phone.brand}</li>
                ))}
            </ul>
        </div>
    );
}
