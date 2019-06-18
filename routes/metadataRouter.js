var express = require("express");
var router = express.Router();
let path = require("path");
let metadataManager = require(path.resolve("./managers/metadataManager"));

/* GET home page. */
router.get("/", function (req, res, next) {
  metadataManager
    .getMetadata()
    .then(function (response) {
      res.send(response);
    })
    .catch(function (response) {
      res.status(response.status || 500).send(response);
    });
});

module.exports = {
  endpoint: "/metadata",
  router: router
};