// Selector.js
import './Selector.css';

export default function Selector({ label, options, value, onChange }) {
    const id = `selector-${label}`;

    return (
        <div className='selector'>
            <label className='selector-label' htmlFor={id}>{label}</label>
            <select id={id} className='selector-select' value={value} onChange={(e) => onChange(e.target.value)}>
                {options.map((option) => (
                    <option key={option.code} value={option.code}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
