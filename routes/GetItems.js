var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/", function (req, res, next) {
  let rawdata = fs.readFileSync("data.json");
  let data = JSON.parse(rawdata);
  res.send(data);
});

module.exports = router;
