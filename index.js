import express from "express";
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())

const tweets = [];
const user = [];

app.post("/sign-up", (req, res) => {
  const body = {
    username: req.body.username,
    avatar: req.body.avatar,
  };
  user.push(body);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const tweet = {
    username: req.body.username,
    tweet: req.body.tweet,
  };
  tweets.push(tweet)
});

app.get("/tweets", (req, res) => {
  res.send(tweets);
});

app.listen(5000);
