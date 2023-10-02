const bookingService = require("../services/bookingService");


exports.bookToView = async (req, res) => {
  try {
    const bookingData = req.body;
    const result = await bookingService.createBooking(bookingData);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getBookings();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};










// const mongoose = require("mongoose");
// const Booking = require("../models/bookingModel");

// exports.bookToView = async (req, res) => {
//   try {
//     const {
//       firstName,
//       lastName,
//       phoneNumber,
//       email,
//       selectedDate,
//       selectedTime,
//     } = req.body;

//     if (
//       !firstName ||
//       !lastName ||
//       !phoneNumber ||
//       !email ||
//       !selectedDate ||
//       !selectedTime
//     ) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const currentTime = Date.now();

//     const newBooking = new Booking({
//       firstName,
//       lastName,
//       phoneNumber,
//       email,
//       selectedDate,
//       selectedTime,
//       timestamp: currentTime,
//     });

//     await newBooking.save();

//     return res.status(201).json({ message: "Booking saved successfully" });
//   } catch (error) {
//     console.error("Error saving booking to MongoDB:", error);
//     return res.status(500).json({ message: "Error saving booking to MongoDB" });
//   }
// };

// exports.getBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find().sort({ timestamp: -1 });
//     res.json(bookings);
//   } catch (error) {
//     console.error("Error fetching bookings:", error);
//     res.status(500).json({ error: "Failed to fetch bookings" });
//   }
// };

