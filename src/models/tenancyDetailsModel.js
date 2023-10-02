const mongoose = require('mongoose');

const tenancyDetailsSchema = new mongoose.Schema({
  addressOfTenancy: String,
  rent: String,
  bond: String,
});

module.exports = mongoose.model('TenancyDetails', tenancyDetailsSchema);
