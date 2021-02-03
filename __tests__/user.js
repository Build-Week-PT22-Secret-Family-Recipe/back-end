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

    it("gets a list of users", async () => {
        const res = await supertest(server).get("/api/user")
        .setHeader({Authorization: token})        
        // .set("Authorization", token)        
        expect(res.type).toBe("application/json");
        expect(res.body[0].username).toBe("vicky");
        expect(res.body.length).toBe(4);
    })
  
})