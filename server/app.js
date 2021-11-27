import express from 'express';
import formRouter from './routes/form.js';

const app = express();

app.use(express.json());

app.use('/forms', formRouter);

app.listen(8080);
