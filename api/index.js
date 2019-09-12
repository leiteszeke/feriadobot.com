require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;

const Tweet = require("./twitter");

app.use(bodyParser);
app.use(cors());

app.post("/register", (req, res) => {
  const { country } = req.body;
});

app.post("/tweet", async (req, res) => {
  const { message } = req.body;
  if (!message || message.trim() === "") {
    return res
      .status(400)
      .send({ error: true, data: [], message: "message_not_found" });
  }
  const tweet = await Tweet(message);
  res.send({ data: tweet, message: "a_new_tweet_was_tweeted", error: false });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
