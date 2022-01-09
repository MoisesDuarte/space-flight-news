const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const Article = require("../api/models/Article");
const { articleKeys, dummyArticle } = require("./_testUtils");

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
          res.body.should.have.keys("articles", "pagination");

          done();
        });
    });
  });

  describe("/GET/:id Article", () => {
    it("it should GET by id an article", (done) => {
      // ? Fetch random article for testing
      Article.findOne({})
        .limit(1)
        .exec((err, result) => {
          chai
            .request(app)
            .get(`/articles/${result._id}`)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("data");
              res.body.data.should.have.keys(articleKeys);
              done();
            });
        });
    });
  });

  describe("/POST/ Article", () => {
    it("it should create a new article and return the created article", (done) => {
      chai
        .request(app)
        .post("/articles")
        .type("json")
        .send(dummyArticle)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("data");
          res.body.data.should.have.keys(articleKeys);
          done();
        });
    });
  });

  describe("/PUT/:id Article", () => {
    it("it should update a article and return the updated article", (done) => {
      Article.findOne({})
        .limit(1)
        .exec((err, result) => {
          chai
            .request(app)
            .put(`/articles/${result._id}`)
            .type("json")
            .send(dummyArticle)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("data");
              res.body.data.should.have.keys(articleKeys);
              done();
            });
        });
    });
  });

  describe("/DELETE/:id Article", () => {
    it("it should delete a article by id and return the deleted model count", (done) => {
      Article.findOne({})
        .limit(1)
        .exec((err, result) => {
          chai
            .request(app)
            .delete(`/articles/${result._id}`)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.keys("deletedCount");
              done();
            });
        });
    });
  });
});
