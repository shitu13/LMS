import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes/router';

import connectDB from './config/db';
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


// Connect to MongoDB
connectDB();
app.use(cors());


// Sample route
app.get('/', (req, res) => {
  res.send('Sample app is running.');
});

app.use('/', router);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});