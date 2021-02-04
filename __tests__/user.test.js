require("dotenv").config();
const supertest = require("supertest");
const server = require("../api/server");
const dbConfig = require("../data/dbConfig");

beforeEach(async () => {
    await dbConfig.seed.run();
})

afterAll(async () => {
    await dbConfig.destroy();
})

describe("User Integration tests", () => {

    let token = "";
    it("login as user", async () => {
        const res = await supertest(server).post("/api/user/login")
            .send({ username: "vicky", password: "abc123" })
        console.log("Request", res.body);
        token = res.body.token;
        console.log("token", token);
    })

    it("gets a list of users", async () => {
        const res = await supertest(server).get("/api/user")
        .set('Authorization', `${token}`);       
        expect(res.type).toBe("application/json");
        expect(res.body.length).toBe(4);
        // expect(res.body[0].username).toBe("vicky"); // Received Nelson
    })
  
})