const { Router } = require("express");
const router = Router();
const db = require("../db");

router.get("/", (_req, res) => {
  db.guests.find({}, (err, docs) => {
    if (err) return res.sendStatus(500);
    res.send(docs);
  });
});

router.post("/", (req, res) => {
  db.posts.insert(req.body, (err, doc) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.json(doc);
  });
});

module.exports = router;
