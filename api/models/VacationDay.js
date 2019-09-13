// Dependencies
const mongoose = require("./Model");
const Schema = mongoose.Schema;
// Schemas
const { CitySchema } = require("./City");

const VacationDaySchema = new Schema({
  name: String,
  date: Date,
  country: String,
  city: CitySchema
});

const VacationDay = mongoose.model("VacationDay", VacationDaySchema);

exports.VacationDay = VacationDay;
exports.VacationDaySchema = VacationDaySchema;
