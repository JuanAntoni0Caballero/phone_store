import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

const mockOnSearch = jest.fn();

describe('SearchInput', () => {

    beforeEach(() => {
        mockOnSearch.mockClear();
    });

    test('renders input correctly', () => {
        const placeholderText = 'Buscar por marca o modelo';
        
        render(<SearchInput onSearch={mockOnSearch} placeholder={placeholderText} />);

        const inputElement = screen.getByPlaceholderText(placeholderText);
        expect(inputElement).toBeInTheDocument();
    });

    test('calls onSearch when typing in the input', () => {
        const placeholderText = 'Buscar por marca o modelo';

        render(<SearchInput onSearch={mockOnSearch} placeholder={placeholderText} />);

        const inputElement = screen.getByPlaceholderText(placeholderText);

        fireEvent.change(inputElement, { target: { value: 'Samsung' } });

        expect(mockOnSearch).toHaveBeenCalledWith('Samsung');
        expect(mockOnSearch).toHaveBeenCalledTimes(1);
    });

    test('updates input value when typing', () => {
        const placeholderText = 'Buscar por marca o modelo';

        render(<SearchInput onSearch={mockOnSearch} placeholder={placeholderText} />);

        const inputElement = screen.getByPlaceholderText(placeholderText);

        fireEvent.change(inputElement, { target: { value: 'iPhone' } });

        expect(inputElement.value).toBe('iPhone');
    });
});
