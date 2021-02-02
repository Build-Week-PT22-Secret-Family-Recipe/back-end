const supertest = require("supertest");
const server = require("../api/server");
const dbConfig = require("../data/dbConfig");

describe("Ingredients Integration tests", () => {
    it("gets a list of Ingredients", async () => {
        const res = await supertest(server).get("/api/ingredients")
        expect(res.type).toBe("application/json");
        expect(res.body.length).toBe(18);
        expect(res.body[1].name).toBe("Sugar");
    })

    it("get ingredient by ID", async () => {
        const res = await supertest(server).get("/api/ingredients/:id")
        expect(res.type).toBe("application/json");
        expect(res.statusCode).toBe(404);
    })

    
})