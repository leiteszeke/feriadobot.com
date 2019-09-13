// Dependencies
const { Router } = require("express");
// SDK
const Tweet = require("../twitter");
// Router
const router = Router();

router.post("/", async (req, res) => {
  const { message } = req.body;
  if (!message || message.trim() === "") {
    return res
      .status(400)
      .send({ error: true, data: [], message: "message_not_found" });
  }
  const tweet = await Tweet(message);
  res.send({ data: tweet, message: "a_new_tweet_was_tweeted", error: false });
});

module.exports = router;
