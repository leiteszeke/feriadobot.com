// Dependencies
const axios = require("axios");
const moment = require("moment");

const init = async country => {
  const response = await axios.get(`http://api.holid.co/v1/${country}`);
  const holidays = response.data.holidays.map(day => {
    return {
      date: moment(day.date, "DD MMM").format("YYYY-MM-DD"),
      name: day.name
    };
  });
  return Promise.resolve(holidays);
};

module.exports = init;
