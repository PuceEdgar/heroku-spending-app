var express = require("express");
var router = express.Router();
var fs = require("fs");

router.post("/", function (req, res, next) {
  let rawdata = fs.readFileSync("data.json");
  let jsondata = JSON.parse(rawdata);
  console.log("item to remove: " + JSON.stringify(jsondata));

  let newArray = jsondata.filter((item, i) => {
    return item.id !== req.body.id;
  });
  let data = JSON.stringify(newArray);
  fs.writeFileSync("data.json", data);
  res.send(data);
});

module.exports = router;
