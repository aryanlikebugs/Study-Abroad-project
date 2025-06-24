const request = require("supertest");
const app = require("../Server");
const mongoose = require("mongoose");
const User = require("../models/user");
const University = require("../models/university");

const TEST_DB_URI = process.env.TEST_MONGO_URI || "mongodb://127.0.0.1/Abroad-test";

let token; // For storing JWT between tests

beforeAll(async () => {
  await mongoose.connect(TEST_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterEach(async () => {
  await User.deleteMany({});
  await University.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Auth API", () => {
  it("should register a user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      name: "Aryan",
      email: "aryan@example.com",
      password: "test123"
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
    token = res.body.token;
  });

  it("should log in a user", async () => {
    await request(app).post("/api/auth/register").send({
      name: "Aryan",
      email: "aryan@example.com",
      password: "test123"
    });

    const res = await request(app).post("/api/auth/login").send({
      email: "aryan@example.com",
      password: "test123"
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    token = res.body.token;
  });

  it("should get user data with valid token", async () => {
    // Register and login to get token
    await request(app).post("/api/auth/register").send({
      name: "Test User",
      email: "testuser@example.com",
      password: "test123"
    });
    const loginRes = await request(app).post("/api/auth/login").send({
      email: "testuser@example.com",
      password: "test123"
    });
    const userToken = loginRes.body.token;

    const res = await request(app)
      .get("/api/auth/get_user")
      .set("Authorization", userToken);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("email", "testuser@example.com");
  });

  it("should update user profile", async () => {
    // Register and login to get token
    await request(app).post("/api/auth/register").send({
      name: "Update User",
      email: "update@example.com",
      password: "test123"
    });
    const loginRes = await request(app).post("/api/auth/login").send({
      email: "update@example.com",
      password: "test123"
    });
    const userToken = loginRes.body.token;

    const res = await request(app)
      .put("/api/auth/update-profile")
      .set("Authorization", userToken)
      .send({
        name: "Updated Name",
        website: "https://updated.com",
        wishlist: {
          country: "USA",
          fieldOfStudy: "AI",
          programType: "Masters"
        }
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.user).toHaveProperty("name", "Updated Name");
    expect(res.body.user.wishlist).toHaveProperty("country", "USA");
  });
});

describe("University API", () => {
  it("should add universities", async () => {
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
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("message", "Universities added successfully!");
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
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.universities)).toBe(true);
    expect(res.body.universities.length).toBeGreaterThan(0);
  });
});