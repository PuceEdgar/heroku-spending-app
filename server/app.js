var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var getItemsRouter = require("./routes/GetItems");
var addItemRouter = require("./routes/AddItem");
var removeItemRouter = require("./routes/RemoveItem");
var updateItemRouter = require("./routes/UpdateItem");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api/getitems", getItemsRouter);
app.use("/api/additem", addItemRouter);
app.use("/api/removeitem", removeItemRouter);
app.use("/api/updateitem", updateItemRouter);

// Serve any static files
app.use(express.static(path.join(__dirname, "../client/build")));

// // Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;