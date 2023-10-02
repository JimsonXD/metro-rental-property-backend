const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/book-to-view', bookingController.bookToView);
router.get('/bookings', bookingController.getBookings);

module.exports = router;
