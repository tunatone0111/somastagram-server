const { Router } = require("express");
const multer = require("multer");
const upload = multer({ dest: "public/images/" });
const router = Router();
const db = require("../db");

router.get("/", (_req, res) => {
  db.posts.find({}, (err, docs) => {
    if (err) return res.sendStatus(500);
    res.send(docs);
  });
});

router.post("/", upload.single("postImage"), (req, res) => {
  db.posts.insert({ ...req.body, postImage: req.file.path }, (err, doc) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.json(doc);
  });
});

module.exports = router;
