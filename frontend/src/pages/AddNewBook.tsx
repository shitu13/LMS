import React, { useState } from "react";
import { addBook } from "../api";
import { useNavigate } from 'react-router-dom';

interface BookForm {
  bookNumber: string;
  bookTitle: string;
  author: string;
  inLibrary: boolean;
}

const AddNewBook = () => {
  const [bookForm, setBookForm] = useState<BookForm>({
    bookNumber: '',
    bookTitle: '',
    author: '',
    inLibrary: true,
  });

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await addBook(bookForm);
      console.log(response);
      // Reset form fields
      setBookForm({
        bookNumber: '',
        bookTitle: '',
        author: '',
        inLibrary: true,
      });
      // Redirect to /all-books
    navigate('/all-books');
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setBookForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Book Number:
        <input
          type="text"
          name="bookNumber"
          value={bookForm.bookNumber}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Book Title:
        <input
          type="text"
          name="bookTitle"
          value={bookForm.bookTitle}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={bookForm.author}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        In Library:
        <input
          type="checkbox"
          name="inLibrary"
          checked={bookForm.inLibrary}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddNewBook;