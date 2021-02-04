require("dotenv").config();
const supertest = require("supertest");
const server = require("../api/server");
const dbConfig = require("../data/dbConfig");

beforeAll(async () => {
    await dbConfig.seed.run();
})

afterAll(async () => {
    await dbConfig.destroy();
})

describe("Recipe Integration tests", () => {

    let token = "";
    it("login as user", async () => {
        const res = await supertest(server).post("/api/user/login")
            .send({ username: "vicky", password: "abc123" })
        console.log("Request", res.body);
        token = res.body.token;
        console.log("token", token);
    })

    it("gets a list of recipes", async () => {
        const res = await supertest(server).get("/api/recipes")
            .set('Authorization', `${token}`);
        expect(res.type).toBe("application/json");
        expect(res.body.length).toBe(2);
        expect(res.statusCode).toBe(200);
        // expect(res.body[1].category).toBe("breakfast"); //returns undefined
    })
})