const express = require('express');

const UserCtrl = require('../controller/user-ctrl');

const router = express.Router();

router.post('/account', UserCtrl.createAccount);
router.post('/shipping', UserCtrl.addShipping);
router.post('/billing', UserCtrl.addBilling);

module.exports = router;
