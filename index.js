const express = require("express");
const cors = require("cors");
const { postRouter, guestRouter } = require("./routes");

const app = express();

const PORT = 8001;

app.use(cors());
app.use(express.json());

app.use("/api/posts", postRouter);
app.use("/api/guests", guestRouter);
app.use("/public", express.static("public"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
