const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('*', (_, res) => {
    res.redirect('/');
  });

  module.exports = app;
