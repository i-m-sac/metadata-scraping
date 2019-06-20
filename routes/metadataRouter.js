const express = require("express");
const router = express.Router();
const path = require("path");
const metadataManager = require(path.resolve("./managers/metadataManager"));


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