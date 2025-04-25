import './SearchInput.css';
import { useState } from 'react';

export default function SearchInput({ onSearch, type, placeholder }) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <input
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className='input'
        />
    );
}
