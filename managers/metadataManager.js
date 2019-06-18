let path = require("path"),
  helper = require(path.resolve("./commons/helper"));

class MetadataManager {
  static getMetadata() {
    try {
      return helper.createSuccessResponse("null", {});
    } catch (err) {
      console.log(err);
      throw helper.createStructuredErrorResponse({});
    }
  }
}

module.exports = MetadataManager;