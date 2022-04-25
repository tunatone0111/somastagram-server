const Datastore = require("nedb");

const db = {
  posts: new Datastore({ filename: "db/posts.db" }),
  guests: new Datastore({ filename: "db/guests.db" }),
};

Object.values(db).forEach((x) => x.loadDatabase());

module.exports = db;
