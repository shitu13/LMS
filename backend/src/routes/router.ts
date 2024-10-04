import express, { Router } from 'express';
import { createBook, deleteBookByBookNumber, editBookByNumber, getAllBooks, getBookByNumber } from '../controllers/bookController';

const router = Router();

router.get('/books', getAllBooks);
router.post('/books', createBook);
router.get('/books/:bookNumber', getBookByNumber);
router.patch('/books/:bookNumber', editBookByNumber);
router.delete('/books/:bookNumber', deleteBookByBookNumber);

export default router;