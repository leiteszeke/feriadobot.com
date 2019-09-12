const Twitter = require("twitter");

const client = new Twitter({
  client_key: process.env.CLIENT_KEY,
  client_secret: process.env.CLIENT_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const PostATweet = message =>
  new Promise((resolve, reject) => {
    client.post(
      "statuses/update",
      { status: message },
      (error, tweet, response) => {
        if (error) return reject(error);
        return resolve({ tweet, response });
      }
    );
  });

module.exports = PostATweet;
