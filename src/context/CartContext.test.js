import { render, screen, waitFor } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';
import userEvent from '@testing-library/user-event';

global.fetch = jest.fn();

function TestComponent() {
    const { cartCount, addToCart } = useCart();

    return (
        <div>
            <p>Carrito: {cartCount}</p>
            <button onClick={() => addToCart(1, 1000, 2000)}>Agregar</button>
        </div>
    );
}

describe('CartContext', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it('exposes cartCount and addToCart', async () => {
        fetch.mockResolvedValueOnce({
            json: async () => ({ count: 3 }),
        });

        render(
            <CartProvider>
                <TestComponent />
            </CartProvider>
        );

        expect(screen.getByText(/Carrito: 0/)).toBeInTheDocument();

        const button = screen.getByText('Agregar');
        userEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText(/Carrito: 3/)).toBeInTheDocument();
        });

        expect(fetch).toHaveBeenCalledWith(
            expect.stringContaining('/cart'),
            expect.objectContaining({
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
        );
    });

    it('handles fetch error', async () => {
        console.error = jest.fn();
        fetch.mockRejectedValueOnce(new Error('Network error'));

        render(
            <CartProvider>
                <TestComponent />
            </CartProvider>
        );

        const button = screen.getByText('Agregar');
        userEvent.click(button);

        await waitFor(() => {
            expect(console.error).toHaveBeenCalledWith(
                'Error al agregar al carrito',
                expect.any(Error)
            );
        });
    });
});
