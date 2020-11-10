var express = require("express");
var router = express.Router();
var fs = require("fs");

router.post("/", function (req, res, next) {
  let rawdata = fs.readFileSync("data.json");
  let jsondata = JSON.parse(rawdata);

  jsondata.push(req.body);
  let data = JSON.stringify(jsondata);
  fs.writeFileSync("data.json", data);
  res.send(data);
});

module.exports = router;
