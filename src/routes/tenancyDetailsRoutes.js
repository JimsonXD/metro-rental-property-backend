const express = require('express');
const router = express.Router();
const tenancyDetailsController = require('../controllers/tenancyDetailsController');

router.post('/submittenancydetails', tenancyDetailsController.submitTenancyDetails);

module.exports = router;
