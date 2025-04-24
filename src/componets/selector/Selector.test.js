import { render, screen, fireEvent } from '@testing-library/react';
import Selector from './Selector';

describe('Selector', () => {
    const mockOnChange = jest.fn();

    const options = [
        { code: 'A', name: 'Option A' },
        { code: 'B', name: 'Option B' },
        { code: 'C', name: 'Option C' },
    ];

    test('renders options correctly', () => {
        render(<Selector label="Choose an option:" options={options} value="A" onChange={mockOnChange} />);

        expect(screen.getByLabelText('Choose an option:')).toBeInTheDocument();

        options.forEach((option) => {
            expect(screen.getByText(option.name)).toBeInTheDocument();
        });
    });

    test('calls onChange when an option is selected', () => {
        render(<Selector label="Choose an option:" options={options} value="A" onChange={mockOnChange} />);

        const selectElement = screen.getByLabelText('Choose an option:');

        fireEvent.change(selectElement, { target: { value: 'B' } });

        expect(mockOnChange).toHaveBeenCalledWith('B');
        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    test('displays the correct value as selected', () => {
        render(<Selector label="Choose an option:" options={options} value="A" onChange={mockOnChange} />);

        const selectElement = screen.getByLabelText('Choose an option:');

        expect(selectElement.value).toBe('A');
    });
});
