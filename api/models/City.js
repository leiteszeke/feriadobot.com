// Dependencies
const mongoose = require("./Model");
const Schema = mongoose.Schema;
// Schemas
const { CountrySchema } = require("./Country");

const CitySchema = new Schema({
  name: String,
  timezone: String,
  country: CountrySchema
});

const City = mongoose.model("City", CitySchema);

exports.City = City;
exports.CitySchema = CitySchema;
