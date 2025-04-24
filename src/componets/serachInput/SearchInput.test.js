import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

const mockOnSearch = jest.fn();

describe('SearchInput', () => {

    beforeEach(() => {
        mockOnSearch.mockClear();
    });

    test('renders input correctly', () => {
        render(<SearchInput onSearch={mockOnSearch} />);

        const inputElement = screen.getByPlaceholderText('Buscar por marca o modelo');
        expect(inputElement).toBeInTheDocument();
    });

    test('calls onSearch when typing in the input', () => {
        render(<SearchInput onSearch={mockOnSearch} />);

        const inputElement = screen.getByPlaceholderText('Buscar por marca o modelo');

        fireEvent.change(inputElement, { target: { value: 'Samsung' } });

        expect(mockOnSearch).toHaveBeenCalledWith('Samsung');
        expect(mockOnSearch).toHaveBeenCalledTimes(1);
    });

    test('updates input value when typing', () => {
        render(<SearchInput onSearch={mockOnSearch} />);

        const inputElement = screen.getByPlaceholderText('Buscar por marca o modelo');

        fireEvent.change(inputElement, { target: { value: 'iPhone' } });

        expect(inputElement.value).toBe('iPhone');
    });
});
