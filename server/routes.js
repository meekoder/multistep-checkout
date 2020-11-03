const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');


router.get('/', function(req, res, next) {
    res.sendFile(publicDir + '/index.html');
});

module.exports = router;
