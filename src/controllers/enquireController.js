const mongoose = require('mongoose');
const Enquire = require('../models/enquireModel');

exports.enquireNow = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, email, message } = req.body;

    if (!firstName || !lastName || !phoneNumber || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const currentTime = Date.now();

    const newEnquire = new Enquire({
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
      timestamp: currentTime,
    });

    await newEnquire.save();

    return res.status(201).json({ message: 'Enquiry saved successfully' });
  } catch (error) {
    console.error('Error saving enquiry to MongoDB:', error);
    return res.status(500).json({ message: 'Error saving enquiry to MongoDB' });
  }
};
