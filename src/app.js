const express = require('express');

const app = express();

app.get('*', (_, res) => {
    res.redirect('/');
  });

  module.exports = app;
