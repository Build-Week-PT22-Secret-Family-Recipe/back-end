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

describe("Ingredientslist with recipe ID Integration tests", () => { 

    let token = "";
    it("login as user", async () => {
        const res = await supertest(server).post("/api/user/login")
            .send({ username: "vicky", password: "abc123" })
        console.log("Request", res.body);
        token = res.body.token;
        console.log("token", token);
    })

    it("gets a list of Ingredients for recipe ID", async () => { 
        const res = await supertest(server).get("/api/ingredients")
        .set('Authorization', `${token}`);
        expect(res.type).toBe("application/json");
        console.log("INGREDIENTS", res.body)
        // expect(res.body[2].quantity).toBe("2-Cups")
    })
})