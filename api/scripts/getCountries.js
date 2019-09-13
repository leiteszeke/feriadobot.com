// Dependencies
const axios = require("axios");
const { Country } = require("../models/Country");

const init = async () => {
  const response = await axios.get("https://restcountries.eu/rest/v2/all");
  const promises = response.data.map(
    country =>
      new Promise(resolve => {
        const model = new Country({
          name: country.name,
          code: country.alpha2Code,
          timezones: country.timezones
        });

        model.save({}, err => {
          if (err) {
            console.log(`Country ${country.name} could not be saved.`);
            return resolve();
          }

          console.log(`Country ${country.name} has been saved.`);
          return resolve();
        });
      })
  );

  Promise.all(promises).then(() => process.exit());
};

init();
