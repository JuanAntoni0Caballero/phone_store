import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
    it('renders the button with given text', () => {
        render(<Button onClick={() => { }}>Hacer click</Button>);
        expect(screen.getByText('Hacer click')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click aquí</Button>);

        const button = screen.getByText('Click aquí');
        userEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
