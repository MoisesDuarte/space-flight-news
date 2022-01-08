const articleKeys = [
  "_id",
  "id",
  "featured",
  "title",
  "url",
  "imageUrl",
  "newsSite",
  "summary",
  "publishedAt",
  "launches",
  "events",
  "__v",
];

const dummyArticle = {
  id: 0,
  featured: false,
  title: "Title A",
  url: "URL",
  imageUrl: "ImageURL",
  newsSite: "newsSite",
  summary: "summary",
  publishedAt: new Date().toISOString(),
  launches: [],
  events: [],
};

module.exports = { articleKeys, dummyArticle };
