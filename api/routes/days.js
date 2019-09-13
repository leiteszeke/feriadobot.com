// Dependencies
const { Router } = require("express");
// Models
const { Country } = require("../models/Country");
const { VacationDay } = require("../models/VacationDay");
// Router
const router = Router();
// Scripts
const Vacations = require("../scripts/getVacations");

router.post("/", async (req, res) => {
  if (!req.body.country || req.body.country.trim() === "") {
    return res
      .status(400)
      .send({ error: true, data: [], message: "country_not_found" });
  }

  Country.findOne({ code: req.body.country }).exec((err, country) => {
    if (err) {
      return res
        .status(404)
        .send({ data: [], message: "country_not_found", error: true });
    }

    VacationDay.find({ country: country.code }).exec(async (err, days) => {
      if (err) {
        return res
          .status(400)
          .send({ data: err, message: "any_error", error: true });
      }

      const apiDays = await Vacations(country.code);

      if (apiDays.length === days.length) {
        return res.send({ data: days, error: false, message: "fetch_success" });
      }

      VacationDay.deleteMany({ country: country.code }).exec(() => {
        VacationDay.insertMany(
          apiDays.map(apiDay => {
            return { ...apiDay, country: country.code };
          }),
          err => {
            if (err) {
              return res
                .status(400)
                .send({ data: err, message: "insert_error", error: true });
            }

            return res.send({
              data: apiDays,
              error: false,
              message: "fetch_and_update_success"
            });
          }
        );
      });
    });
  });
});

module.exports = router;
