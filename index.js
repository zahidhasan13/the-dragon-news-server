const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon on fire");
});

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/news", (req, res) => {
  res.json(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((select) => select._id === id);
  res.json(selectedNews);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.json(news);
  } else {
    const categoryNews = news.filter((select) => parseInt(select.category_id) === id);
    res.json(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
