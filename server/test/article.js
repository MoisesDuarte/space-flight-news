const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const Article = require("../api/models/Article");

const should = chai.should();

chai.use(chaiHttp);

describe("Articles", () => {
  describe("/GET Articles", () => {
    it("it should GET paginated list of articles", (done) => {
      chai
        .request(app)
        .get("/articles")
        .query({
          page: 0,
          limit: 10,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("articles").which.is.an("array");
          res.body.should.have.property("page").which.is.an("number");
          res.body.should.have.property("pages").which.is.an("number");

          done();
        });
    });
  });

  describe("/GET/:id Article", () => {
    it("it should GET by id an article", async () => {
      // ? Fetch random article id for testing
      const { _id } = await Article.findOne({}).limit(1);

      chai
        .request(app)
        .get(`/articles/${_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
        });
    });
  });
});
