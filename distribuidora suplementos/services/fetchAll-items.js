import axios from 'axios';

const API_URL = 'http://localhost:3000/api/product'; 

export const fetchItems = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data; // Returns the array of items
    } catch (error) {
      console.error('erro ao carregar itens:', error);
      throw error;
    }
  };

