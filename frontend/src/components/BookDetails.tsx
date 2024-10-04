import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBook, updateBook, deleteBook } from '../api';

interface Book {
  _id: string;
  bookNumber: string;
  bookTitle: string;
  author: string;
}

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const book = await getBook(id);
        setBook(book);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBook();
  }, [id]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      const updatedBook = await updateBook(id, book);
      setBook(updatedBook);
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteBook(id);
      // Redirect to book list page
      window.location.href = '/books';
    } catch (error) {
      console.error(error);
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.bookTitle}</h1>
      <p>Author: {book.author}</p>
      <p>Book Number: {book.bookNumber}</p>
      {editing ? (
        <form>
          <label>
            Book Title:
            <input type="text" value={book.bookTitle} onChange={(e) => setBook({ ...book, bookTitle: e.target.value })} />
          </label>
          <label>
            Author:
            <input type="text" value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} />
          </label>
          <label>
            Book Number:
            <input type="text" value={book.bookNumber} onChange={(e) => setBook({ ...book, bookNumber: e.target.value })} />
          </label>
          <button onClick={handleSave}>Save</button>
        </form>
      ) : (
        <div>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BookDetails;