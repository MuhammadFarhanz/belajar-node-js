import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/eko", (req, res) => {
  res.send("Hello Farhan");
});

app.listen(3000, () => {
  console.info("Server started on port 3000");
});
