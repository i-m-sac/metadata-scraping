let path = require("path"),
  helper = require(path.resolve("./commons/helper")),
  metadataService = require(path.resolve("./services/metadataService"));

class MetadataManager {
  static async getMetadata(req) {
    try {
      let response = await metadataService.getMetadata(req.body.url)
      return helper.createSuccessResponse(response, {});
    } catch (err) {
      console.log(err);
      throw helper.createStructuredErrorResponse({});
    }
  }
}

module.exports = MetadataManager;