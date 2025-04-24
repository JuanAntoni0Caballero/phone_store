import { fetchPhones, fetchPhoneById } from './phoneService';

const mockApiUrl = 'https://fake-api.com';

beforeEach(() => {
    global.fetch = jest.fn();
    localStorage.clear();
    process.env.REACT_APP_API_URL = mockApiUrl;
});

describe('fetchPhones', () => {

    it('returns cached data if valid', async () => {
        const cachedPhones = [{ id: 1, name: 'iPhone' }];
        const timestamp = Date.now();

        localStorage.setItem('phones-cache', JSON.stringify({ data: cachedPhones, timestamp }));

        const data = await fetchPhones();
        expect(data).toEqual(cachedPhones);
        expect(fetch).not.toHaveBeenCalled();
    });

    it('fetches data and caches it if no valid cache', async () => {
        const mockResponse = [{ id: 1, name: 'Pixel' }];
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse,
        });

        const result = await fetchPhones();
        expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}/product`);
        expect(result).toEqual(mockResponse);

        const cached = JSON.parse(localStorage.getItem('phones-cache'));
        expect(cached.data).toEqual(mockResponse);
    });

    it('throws error if API fails', async () => {
        fetch.mockResolvedValueOnce({ ok: false });

        await expect(fetchPhones()).rejects.toThrow('Error getting phone numbers');
    });
});

describe('fetchPhoneById', () => {
    const id = 42;

    it('returns cached phone if valid', async () => {
        const cachedPhone = { id, name: 'Samsung' };
        const timestamp = Date.now();

        localStorage.setItem(`phone-${id}-cache`, JSON.stringify({ data: cachedPhone, timestamp }));

        const data = await fetchPhoneById(id);
        expect(data).toEqual(cachedPhone);
        expect(fetch).not.toHaveBeenCalled();
    });

    it('fetches phone by id and caches it', async () => {
        const phone = { id, name: 'OnePlus' };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => phone,
        });

        const result = await fetchPhoneById(id);
        expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}/product/${id}`);
        expect(result).toEqual(phone);

        const cached = JSON.parse(localStorage.getItem(`phone-${id}-cache`));
        expect(cached.data).toEqual(phone);
    });

    it('throws error if API fails', async () => {
        fetch.mockResolvedValueOnce({ ok: false });

        await expect(fetchPhoneById(id)).rejects.toThrow('Error getting phone number');
    });
});
