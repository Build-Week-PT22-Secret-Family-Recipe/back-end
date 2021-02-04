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


describe("Ingredients Integration tests", () => {

    let token = "";
    it("login as user", async () => {
        const res = await supertest(server).post("/api/user/login")
            .send({ username: "vicky", password: "abc123" })
        console.log("Request", res.body);
        token = res.body.token;
        console.log("token", token);
    })

    it("gets a list of Ingredients", async () => {
        const res = await supertest(server).get("/api/ingredients")
        .set('Authorization', `${token}`);  
        expect(res.type).toBe("application/json");
        expect(res.body.length).toBe(18);
        expect(res.body[1].name).toBe("Sugar");
    })

    it("get ingredient by ID", async () => {
        const res = await supertest(server).get("/api/ingredients/:id")
        .set('Authorization', `${token}`);
        expect(res.type).toBe("application/json");
        expect(res.statusCode).toBe(404);
    })

    
})