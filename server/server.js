const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('./db');
const userRouter = require('./routes/user-router');
const publicDir = path.join(__dirname, '/../compiled');
const port = 3000;

app.use(parser.urlencoded({extended: true}));
app.use(cors());
app.use(parser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(publicDir));
app.get('*', (req, res) => {
  res.redirect('/');
});

app.use('/api', userRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
