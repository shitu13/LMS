import { useState, useEffect } from 'react';
import { getBooks } from '../api';

interface Book {
  _id: string;
  bookNumber: string;
  bookTitle: string;
  author: string;
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await getBooks();
        setBooks(books);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  const handleButtonClick = () =>{
    
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Book Number</th>
          <th>Book Title</th>
          <th>Author</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book._id}>
            <td>{book.bookNumber}</td>
            <td>{book.bookTitle}</td>
            <td>{book.author}</td>
            <td>
              <button>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;