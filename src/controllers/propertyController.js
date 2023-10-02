const mongoose = require('mongoose');
const Property = require('../models/propertyModel');

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find();

    if (!properties || properties.length === 0) {
      return res
        .status(404)
        .json({ message: 'No properties found in the database' });
    }

    return res.json(properties);
  } catch (error) {
    console.error('Error fetching properties from MongoDB:', error);
    return res
      .status(500)
      .json({ message: 'Error fetching properties from MongoDB' });
  }
};

exports.getPropertyById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  try {
    const property = await Property.findOne({ _id: id });

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.json(property);
  } catch (error) {
    console.error('Error fetching property from MongoDB:', error);
    return res
      .status(500)
      .json({ message: 'Error fetching property from MongoDB' });
  }
};
