import "./SearchInput.css";
import { useState } from "react";

export default function SearchInput({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Buscar por marca o modelo"
            className="search-input"
        />
    );
}
