const mongoose = require('mongoose');
const Email = require('../models/emailModel');

exports.saveEmail = async (req, res) => {
  try {
  
    const { email } = req.body;

    const newEmail = new Email({ email });
    await newEmail.save();

    res.status(201).json({ message: 'Email saved successfully' });
  } catch (error) {
    console.error('Error saving email:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};
