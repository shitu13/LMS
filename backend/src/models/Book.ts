// Book.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface BookInterface {
  bookNumber: string;
  bookTitle: string;
  author: string;
  inLibrary: boolean;
}

export const bookSchema: Schema = new Schema({
  bookNumber: { type: String, required: true, unique: true },
  bookTitle: { type: String, required: true },
  author: { type: String, required: true },
  inLibrary: {type: Boolean, default: true }
});

export interface BookDocument extends BookInterface, Document {}

export const Book = mongoose.model<BookDocument>('Book', bookSchema);