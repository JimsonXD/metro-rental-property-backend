const Booking = require("../models/bookingModel");

exports.createBooking = async (bookingData) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      selectedDate,
      selectedTime,
    } = bookingData;

    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email ||
      !selectedDate ||
      !selectedTime
    ) {
      throw new Error("All fields are required");
    }

    const currentTime = Date.now();

    const newBooking = new Booking({
      firstName,
      lastName,
      phoneNumber,
      email,
      selectedDate,
      selectedTime,
      timestamp: currentTime,
    });

    await newBooking.save();
    return { message: "Booking saved successfully" };
  } catch (error) {
    console.error("Error saving booking to MongoDB:", error);
    throw new Error("Error saving booking to MongoDB");
  }
};

exports.getBookings = async () => {
  try {
    const bookings = await Booking.find().sort({ timestamp: -1 });
    return bookings;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw new Error("Failed to fetch bookings");
  }
};
