// Dependencies
const { Router } = require("express");
// Router
const router = Router();
// Routes
const days = require("./days");
const twitter = require("./twitter");

router.use("/days", days);
router.use("/twitter", twitter);

module.exports = router;
