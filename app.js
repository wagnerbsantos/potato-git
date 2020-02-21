const express = require("express");
const path = require("path");
var app = express();
const PORT = process.env.PORT || 5000;
app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/potato", (req, res) =>
    res.render("pages/search_result", { potato: req.query.search })
  )
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
