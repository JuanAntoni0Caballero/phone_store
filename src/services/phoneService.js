
/**
 * Gets all available phones from the API.
 * @returns {Promise<Array>} Phone list
 */


export const fetchPhones = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/product`);
        if (!response.ok) {
            throw new Error('Error getting phone numbers');
        }
        const data = await response.json();
        console.log('Data obtained:', data);
        return data;
    } catch (error) {
        console.error('Error in fetchPhones:', error);
        throw error;
    }
};
