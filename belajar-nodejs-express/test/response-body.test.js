import express from "express";
import request from "supertest";

test("Response Body", async () => {
  const app = express();

  app.get("/", (req, res) => {
    res.set("Content-Type", "text/html");
    res.send(`<html><body>Hello World</body></html>`);
  });

  const response = await request(app).get("/");

  expect(response.get("Content-Type")).toContain("text/html");
  expect(response.text).toBe(`<html><body>Hello World</body></html>`);
});
