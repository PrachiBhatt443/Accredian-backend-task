// const express = require('express');
// const router = express.Router();
// const purchaseController = require('../controllers/purchaseController');

// router.post('/', purchaseController.completePurchase);

// module.exports = router;
const express = require('express');
const router = express.Router();
const { completePurchase } = require('../controllers/purchaseController');

router.post('/', completePurchase);

module.exports = router;
