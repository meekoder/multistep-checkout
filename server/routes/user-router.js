const express = require('express');

const UserCtrl = require('../controller/user-ctrl');

const router = express.Router();

router.post('/account', UserCtrl.createAccount);

module.exports = router;
