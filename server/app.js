import express from 'express';
import formRouter from './routes/form.js';
import surveyRouter from './routes/survey.js';
import 'express-async-errors';

const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, DELETE',
  );
  next();
});

app.use(express.json());

app.use('/forms', formRouter);

app.use('/surveys', surveyRouter);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080, () => console.log('8080'));
