const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydb';
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';

const corsOptions = {
  origin: CORS_ORIGIN,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

const emailRoutes = require('./routes/emailRoutes');
const enquireRoutes = require('./routes/enquireRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const tenancyDetailsRoutes = require('./routes/tenancyDetailsRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

app.use('/api', emailRoutes);
app.use('/api', enquireRoutes);
app.use('/api', bookingRoutes);
app.use('/api', tenancyDetailsRoutes);
app.use('/api', propertyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
