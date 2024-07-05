const express = require('express');
const router = express.Router();
const referralController = require('../controllers/referralController');

router.post('/', referralController.createReferral);

module.exports = router;
