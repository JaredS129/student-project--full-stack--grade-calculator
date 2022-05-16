const request = require("supertest");
const app = require("./app");

test("GET /api/grade-scale: return a status code of 200 and return an array of grades", async () => {
  const expectedResponseBody = [
    {
      level: "Level 5",
    },
    {
      level: "Level 5",
    },
    {
      level: "Level 5",
    },
    {
      level: "Level 5",
    },
    {
      level: "Level 5",
    },
    {
      level: "Level 5",
    },
    {
      level: "Level 5",
    },
    {
      level: "Level 5",
    },
    {
      level: "Level 5",
    },
    {
      level: "Level 5",
    },
    {
      level: "Level 5",
    },
    {
      level: "Level 6",
    },
    {
      level: "Level 6",
    },
    {
      level: "Level 6",
    },
    {
      level: "Level 6",
    },
    {
      level: "Level 6",
    },
    {
      level: "Level 6",
    },
    {
      level: "Level 6",
    },
    {
      level: "Level 6",
    },
    {
      level: "Level 6",
    },
    {
      level: "Level 6",
    },
    {
      level: "Level 6",
    },
  ];
  const response = await request(app)
    .get("/api/grade-scale")
    .set("Accept", "application/json");

  expect(response.status).toBe(200);
  expect(response.body).toEqual(expectedResponseBody);
});
