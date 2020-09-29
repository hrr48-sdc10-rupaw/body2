const supertest = require("supertest");
const Game = require('../db/index.js');
const assert = require('assert');
const {app, server} = require("../server/index");
const mongoose = require('mongoose');

afterAll(done => {
  server.close();
  mongoose.connection.close();
  done();
});

describe("GET /", function() {
  it("it should has status code 200", async done => {
    const request = supertest(app);
      const res = await request.get("/");
      expect(res.status).toBe(200);
        done();
      });

  it("it should return a list of games, where the first one is hello kitty", async done=>{
    const request = supertest(app);
    const res = await request.get("/moist-air/game");

    expect(res.body[0].title).toBe('Hello Kitty and Sanrio Friends Racing');
    done();
  })
  });

//run "npm run seed before testing to seed the db. this test only tests the seeding function. remove the x if you want to test this function"
xdescribe("database seeder", function(){
  it('it should seed the db with 100 instances of data', async done=>{
    let data = await Game.find({});
    expect(data.length).toBe(100);
    done();
  })
})


