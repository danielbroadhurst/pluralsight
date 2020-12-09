const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

const app = require("../index");

describe("GET /", function () {
  it("should return a message the server is running", function (done) {
    chai
      .request(app)
      .get("/")
      .end(function (error, res) {
        if (error) {
          return done(error);
        }
        expect(res.status).to.equal(200);
        done();
      });
  });
});
