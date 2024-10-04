import axios from 'axios';

interface Book {
  _id: string;
  bookNumber: string;
  bookTitle: string;
  author: string;
}

const api = axios.create({
  baseURL: 'http://localhost:5000', // replace with your API URL
});

export const addBook = async (bookData: {
  bookNumber: string;
  bookTitle: string;
  author: string;
  inLibrary: boolean;
}) => {
  try {
    const response = await api.post('/books', bookData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getBooks = async () => {
  try {
    const response = await api.get('/books');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};