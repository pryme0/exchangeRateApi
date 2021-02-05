var express = require('express');
const exchangeController = require('../controllers/exchangeController');
var router = express.Router();

/* get latest exchange routes. */
router.get('/rates',exchangeController.getRates);
/* get latest exchange routes. */
router.get('/',exchangeController.baserates);

module.exports = router;
