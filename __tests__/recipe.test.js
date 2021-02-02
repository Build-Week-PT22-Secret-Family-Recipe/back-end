const supertest = require("supertest");
const server = require("../api/server");
const dbConfig = require("../data/dbConfig");

describe("Recipe Integration tests", () => {
    it("gets a list of recipes", async () => {
        const res = await supertest(server).get("/api/recipes")
        expect(res.type).toBe("application/json");
        // expect(res.body.length).toBe(2);
        // expect(res.body[0].category).toBe("breakfast");
    })
})