import axios from 'axios';

const API_URL = 'http://localhost:8080/api/customers';

export async function queryCustomerAPI(customerId: string) {
    try {
        const response = await axios.get(`${API_URL}/${customerId}`);
        return response.data;
    } catch (error) {
        console.error('Error querying customer API:', error);
        throw error;
    }
}
