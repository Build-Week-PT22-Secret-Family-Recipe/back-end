const supertest = require("supertest");
const server = require("../api/server");
const dbConfig = require("../data/dbConfig");

describe("Ingredientslist with recipe ID Integration tests", () => { 
    it("gets a list of Ingredients for recipe ID", async () => { 
        const res = await supertest(server).get("/api/ingredients")
        expect(res.type).toBe("application/json");
        // expect(res.body[0].quantity).toBe("2-Cups")
    })
})