const mongoose = require("mongoose");
const TenancyDetails = require("../models/tenancyDetailsModel");

exports.submitTenancyDetails = async (req, res) => {
  try {
    const formData = req.body;

    const newTenancyDetails = new TenancyDetails(formData);
    await newTenancyDetails.save();

    res.status(201).json({ message: "Form data submitted successfully" });
  } catch (error) {
    console.error("An error occurred while submitting the form:", error);
    res.status(500).json({ message: "An error occurred" });
  }
};
