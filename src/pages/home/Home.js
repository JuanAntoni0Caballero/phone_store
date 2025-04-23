import './Home.css';
import { useEffect, useState } from 'react';
import { fetchPhones } from '../../services/phoneService';
import PhoneCard from '../../componets/phoneCard/PhoneCard';
import SearchInput from '../../componets/serachInput/SearchInput';

export default function Home() {
    const [phones, setPhones] = useState([]);
    const [filteredPhones, setFilteredPhones] = useState([]);

    useEffect(() => {
        fetchPhones()
            .then(data => {
                setPhones(data);
                setFilteredPhones(data);
            })
            .catch(err => console.error(err));
    }, []);

    const handleSearch = (searchTerm) => {
        if (searchTerm) {
            const filtered = phones.filter(phone =>
                phone.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                phone.model.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPhones(filtered);
        } else {
            setFilteredPhones(phones);
        }
    };

    return (
        <div className="home-container">
            <div className="search-container">
                <SearchInput onSearch={handleSearch} />
            </div>
            <div className="card-grid">
                {filteredPhones.map(phone => (
                    <PhoneCard key={phone.id} phone={phone} />
                ))}
            </div>
        </div>
    );
}
