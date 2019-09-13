// Dependencies
const mongoose = require("./Model");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  name: String,
  code: String,
  timezones: Array
});

const Country = mongoose.model("Country", CountrySchema);

exports.Country = Country;
exports.CountrySchema = CountrySchema;
