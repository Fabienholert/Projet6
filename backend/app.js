const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get('/api/books', (req, res, next) => {
    res.status(200).json();
    next();
  });

app.get('/api/books/:id', (req, res, next) => {
    res.status(200).json();
    next();
  });

app.get('/api/books/bestrating', (req, res, next) => {
    res.status(200).json();
    next();
  });

app.post ('/api/auth/signup', (req, res, next) => {
    res.status(200).json();
    next();
  });

  app.post ('/api/auth/login', (req, res, next) => {
    res.status(200).json();
    next();
  });

  app.post ('/api/books', (req, res, next) => {
    res.status(200).json();
    next();
  });

  app.post ('/api/books/:id/rating', (req, res, next) => {
    res.status(200).json();
    next();
  });

  app.put('/api/books/:id', (req, res, next) => {
    res.status(200).json();
    next();
  });

  app.delete('/api/books/:id', (req, res) => {
    res.status(200).json();
    next();
  });

module.exports = app;