import fs from 'fs';
import { google } from 'googleapis';
import readline from 'readline';
import form from '@googleapis/forms';
import dotenv from 'dotenv';
import axios from 'axios';
import path from 'path';
const __dirname = path.resolve();
dotenv.config();

const SCOPES = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.readonly',
];

const TOKEN_PATH = 'token.json';

import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  console.log('middleware for form');
  next();
});

router.get('/', (req, res) => {
  res.status(201).send('GET: /form');
});

router.post('/', (req, res) => {
  const {
    title,
    category,
    description,
    gift,
    responderNum,
    targetAge,
    targetGender,
  } = req.body;
  fs.readFile(
    path.join(__dirname, 'routes', 'form.json'),
    'utf-8',
    (err, json) => {
      if (err) res.sendStatus(404);
      const forms = JSON.parse(json);
      forms.sort((a, b) => a.id - b.id);
      console.log();
      const newForm = {
        id: forms[forms.length - 1].id + 1,
        title,
        category,
        description,
        gift,
        responderNum,
        targetAge,
        targetGender,
      };

      if (newForm) {
        axios
          .post(
            `https://forms.googleapis.com/v1beta/forms?key=${process.env.FORM_API_KEY}`,
            {
              info: {
                title: newForm.title,
              },
            },
            {
              headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
            },
          )
          .then((response) => response.data)
          .then((gForm) => {
            newForm.googleForm = gForm;
          })
          .catch(res.status(401).send('unauthorized'));
      }
    },
  );
});

router.put('/:id', (req, res) => {
  res.status(201).send('PUT: /users/:id');
});

router.delete('/:id', (req, res) => {
  res.status(201).send('DELETE: /users/:id');
});

export default router;
