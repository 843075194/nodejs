
var express = require("express");

var phpRouter = new express.Router();

phpRouter.get("/list", function() {
    console.log("list");
})
phpRouter.get("/detail", function() {
    console.log("detail");
})

module.exports = phpRouter;