var express = require('express');
const exchangeController = require('../controllers/exchangeController');
var router = express.Router();

/* get latest exchange routes. */
router.get('/rates',exchangeController.getRates);

module.exports = router;
