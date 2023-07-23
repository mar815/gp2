import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import ItemRoutes from './routes/itemRoutes';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Enable CORS for all routes

const port = process.env.PORT || 3000;

app.use(express.json()); // Body parsing
app.use('/items', ItemRoutes); // Use item routes

// Catch-all error handler
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong.');
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
