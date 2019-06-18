var express = require("express");
var router = express.Router();
let path = require("path");
let metadataManager = require(path.resolve("./managers/metadataManager"));

/* GET home page. */
router.post("/", async function (req, res, next) {
  try {
    let response = await metadataManager.getMetadata(req);
    res.send(response);
  } catch (response) {
    res.status(response.status || 500).send(response);
  }
});

module.exports = {
  endpoint: "/metadata",
  router: router
};