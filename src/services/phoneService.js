
/**
 * Gets all available phones from the API.
 * @returns {Promise<Array>} Phone list
 */


export const fetchPhones = async () => {
    const cacheKey = 'phones-cache';
    const cacheDuration = 3600000;
    const currentTime = Date.now();

    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);

        if (currentTime - timestamp < cacheDuration) {
            return data;
        }
    }

    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/product`);
        if (!response.ok) {
            throw new Error('Error getting phone numbers');
        }
        const data = await response.json();

        localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: currentTime }));

        return data;
    } catch (error) {
        console.error('Error in fetchPhones:', error);
        throw error;
    }
};



export const fetchPhoneById = async (id) => {
    const cacheKey = `phone-${id}-cache`;
    const cacheDuration = 3600000;
    const currentTime = Date.now();

    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);

        if (currentTime - timestamp < cacheDuration) {
            return data;
        }
    }

    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`);
        if (!response.ok) {
            throw new Error('Error getting phone number');
        }
        const data = await response.json();

        localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: currentTime }));

        return data;
    } catch (error) {
        console.error('Error in fetchPhoneById:', error);
        throw error;
    }
};
