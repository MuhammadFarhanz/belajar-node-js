import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.redirect("/next-page");
});

test("Response Redirect", async () => {
  const response = await request(app).get("/");

  expect(response.status).toBe(302);
  expect(response.get("location")).toBe("/next-page");
});
