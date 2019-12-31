const express = require('express');
const EventRouter = require('./routes/event');

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.use('/event', EventRouter);

app.get('*', (_, res) => {
    res.redirect('/');
  });

  module.exports = app;
