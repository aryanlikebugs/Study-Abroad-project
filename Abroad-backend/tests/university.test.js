const request = require("supertest");
const app = require("../Server");
const mongoose = require("mongoose");
const University = require("../models/university");

// Use a unique test database URI from environment or fallback
const TEST_DB_URI = process.env.TEST_MONGO_URI || "mongodb://127.0.0.1/Abroad-test";

beforeAll(async () => {
  await mongoose.connect(TEST_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterEach(async () => {
  await University.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("University API", () => {
  it("should add a university", async () => {
    const res = await request(app)
      .post("/api/auth/add-universities")
      .send([
        {
          collegeName: "Test University",
          location: "Test City",
          coursesOffered: ["CS", "AI"],
          scholarshipsOffered: ["Merit"],
          eligibilityCriteriaForInternationalStudents: "Good grades"
        }
      ]);

    expect(res.statusCode).toBe(201); // Should match backend response
  });

  it("should fetch all universities", async () => {
    await new University({
      collegeName: "Test Uni",
      location: "Someplace",
      coursesOffered: ["CS"],
      scholarshipsOffered: [],
      eligibilityCriteriaForInternationalStudents: "None"
    }).save();

    const res = await request(app).get("/api/auth/universities");
    expect(res.body.universities.length).toBeGreaterThan(0);
  });
});