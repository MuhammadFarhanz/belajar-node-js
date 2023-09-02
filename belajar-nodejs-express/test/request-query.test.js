import express from "express";
import request from "supertest";

const app = express();

app.get("/hello/world", (req, res) => {
  res.send(`Hello ${req.query.firstname} ${req.query.lastname}`);
});

test("Test ExpressJS", async () => {
  const response = await request(app)
    .get("/hello/world")
    .query({ firstname: "muhammad", lastname: "farhan" });

  expect(response.text).toBe("Hello muhammad farhan");
});
