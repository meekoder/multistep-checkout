const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');

const publicDir = path.join(__dirname, '..', 'client', 'dist');

app.use(parser.json());
app.use(express.static(publicDir));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
