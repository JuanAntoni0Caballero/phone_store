import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PhoneCard from './PhoneCard';

describe('PhoneCard', () => {
    const phone = {
        id: '123',
        brand: 'Samsung',
        model: 'Galaxy S21',
        price: 799,
        imgUrl: 'https://example.com/image.jpg'
    };

    it('renders phone information correctly', () => {
        render(
            <MemoryRouter>
                <PhoneCard phone={phone} />
            </MemoryRouter>
        );

        expect(screen.getByText('Samsung')).toBeInTheDocument();
        expect(screen.getByText('Galaxy S21')).toBeInTheDocument();
        expect(screen.getByText('Precio: 799€')).toBeInTheDocument();

        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', phone.imgUrl);
        expect(image).toHaveAttribute('alt', phone.brand);
    });

    it('links to the correct details page', () => {
        render(
            <MemoryRouter>
                <PhoneCard phone={phone} />
            </MemoryRouter>
        );

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', `/detalles/${phone.id}`);
    });
});
