import express from "express";
import request from "supertest";

test("response header", async () => {
  const app = express();

  app.get("/", (req, res) => {
    res
      .set({
        "x-Powered-By": "Muhammad Farhan",
        "X-Author": "Farhan",
      })
      .end();
  });

  const response = await request(app).get("/");

  expect(response.get("X-Powered-By")).toBe("Muhammad Farhan");
  expect(response.get("x-Author")).toBe("Farhan");
});
