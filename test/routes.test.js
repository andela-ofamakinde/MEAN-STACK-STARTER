process.env.NODE_ENV = 'test';

var assert = require("assert");
var should = require("should");
var request = require("supertest");

var app = require("../index");
var DemoModel = require("../server/models/demo.model");

describe("it should get all demos", function() {
  before(function(done){
    DemoModel.remove({}, function(){
      done();
    })
  })
  it("should get all demos", function(done) {
    request(app)
    .get('/demo')
    .send({})
    .expect(200)
    .end(function(err, res){
      console.log("test response", err, res.body)
      done();
    })
  })
})
