var express = require("express");
var router = express.Router();
var fs = require("fs");

router.post("/", function (req, res, next) {
  let rawdata = fs.readFileSync("data.json");
  let jsondata = JSON.parse(rawdata);

  let idArray = jsondata.map((item) => {
    return item.id;
  });

  var maxId = Math.max(...idArray);
  maxId = maxId + 1;

  jsondata.forEach(function (x) {
    if (x.id === req.body.id) {
      if (x.type !== req.body.type) {
        x.id = maxId;
      }
      x.type = req.body.type;
      x.place = req.body.place;
      x.amount = req.body.amount;
      x.date = req.body.date;
    }
  });

  let data = JSON.stringify(jsondata);
  fs.writeFileSync("data.json", data);
  res.send(data);
});

module.exports = router;
