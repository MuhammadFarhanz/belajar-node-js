import cookieParser from "cookie-parser";
import express from "express";
import request from "supertest";

const app = express();
app.use(cookieParser("INISECRETKEY"));
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.signedCookies["Login"];
  res.send(`Hello ${name}`);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("Login", name, { signed: true });
  res.send(`Hello ${name}`);
});

test("Test Cookie Read", async () => {
  const response = await request(app)
    .get("/")
    .set(
      "Cookie",
      "Login=s%3AFarhan.57w9v1Qh5tvzsxBciubhPpc%2BItXtmfhTjrT8x%2FU3f2g; Path=/"
    );

  expect(response.text).toBe("Hello Farhan");
});

test("Test Cookie Write", async () => {
  const response = await request(app).post("/login").send({ name: "Farhan" });
  console.info(response.get("Set-Cookie"));
  expect(response.get("Set-Cookie").toString()).toContain("Farhan");
  expect(response.text).toBe("Hello Farhan");
});
