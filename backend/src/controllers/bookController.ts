import { Request, Response } from 'express';
import { Book } from '../models/Book';


// Save book to database. 
export const createBook = async (req: Request, res: Response) => {
  try {
    const { bookNumber, bookTitle, author, inLibrary } = req.body;
    const book = new Book({ bookNumber, bookTitle, author, inLibrary });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating book' });
  }
};

// Get all books.
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find().exec();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving books' });
  }
};

// Get books by number.
export const getBookByNumber = async (req: Request, res: Response) => {
  try {
    const bookNumber = req.params.bookNumber; // Get the URL parameter
    const book = await Book.findOne({ bookNumber: { $regex: bookNumber, $options: 'i' } });
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      res.json(book);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving book' });
  }
};

// Edit book details by number.
export const editBookByNumber = async (req: Request, res: Response) => {
  try {
    const bookNumber = req.params.bookNumber; // Get the URL parameter
    const book = await Book.findOne({ bookNumber: { $regex: bookNumber, $options: 'i' } });

    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      // Update book details
      const updatedBook = await Book.findByIdAndUpdate(book._id, req.body, { new: true });

      if (!updatedBook) {
        res.status(500).json({ message: 'Error updating book' });
      } else {
        res.json(updatedBook);
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error editing book' });
  }
};

//delete book by number
export const deleteBookByBookNumber = async (req: Request, res: Response) => {
  try {
    const bookNumber = req.params.bookNumber;
    const result = await Book.deleteOne({ bookNumber }).exec();
    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      res.status(204).json({ message: 'Book deleted' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting book' });
  }
};