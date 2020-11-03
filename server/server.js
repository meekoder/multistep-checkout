const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');

const publicDir = path.join(__dirname, '/../compiled');

app.use(express.static(publicDir));
app.use(parser.json());
app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
