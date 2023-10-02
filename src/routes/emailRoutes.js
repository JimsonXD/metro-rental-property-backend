const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/save-email', emailController.saveEmail);

module.exports = router;
