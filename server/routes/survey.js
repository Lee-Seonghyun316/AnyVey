import fs from 'fs';
import fsAsync from 'fs/promises';
import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile(
    path.join(__dirname, 'routes', 'survey.json'),
    'utf-8',
    (err, json) => {
      if (err) res.sendStatus(404);
      res.status(200).send(JSON.parse(json));
    },
  );
});

router.post('/', (req, res) => {
  res.status(201).send('POST: /surveys/:id');
});

router.put('/:id', (req, res) => {
  res.status(201).send('PUT: /surveys/:id');
});

router.delete('/:id', (req, res) => {
  res.status(201).send('DELETE: /surveys/:id');
});

export default router;
