import fs from 'fs';
import { google } from 'googleapis';
import readline from 'readline';
import form from '@googleapis/forms';
import dotenv from 'dotenv';
import axios from 'axios';
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
  axios
    .post(
      `https://forms.googleapis.com/v1beta/forms?key=${process.env.FORM_API_KEY}`,
      {
        info: {
          title: '설문조사',
        },
      },
      { headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` } },
    )
    .then((response) => res.status(201).send(response.data));
});

router.put('/:id', (req, res) => {
  res.status(201).send('PUT: /users/:id');
});

router.delete('/:id', (req, res) => {
  res.status(201).send('DELETE: /users/:id');
});

export default router;
