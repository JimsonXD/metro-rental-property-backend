const express = require('express');
const router = express.Router();
const enquireController = require('../controllers/enquireController');

router.post('/enquire-now', enquireController.enquireNow);

module.exports = router;
