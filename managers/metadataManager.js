const path = require("path"),
  helper = require(path.resolve("./commons/helper")),
  metadataService = require(path.resolve("./services/metadataService")),
  constants = require(path.resolve('./commons/constants'));

class MetadataManager {

  /**
   * Function to communicate to service layer and retrieve the site metadata
   * @param req {Object}
   * @return {Promise}
   */
  static async getMetadata(req) {
    if(!req.body.url){
      throw helper.createStructuredErrorResponse(helper.getBadRequestErrorObj(
        constants.MESSAGES.ERROR.URL_MISSING
      ));
    }
    try {
      let response = await metadataService.getMetadata(req.body.url)
      return helper.createSuccessResponse(response);
    } catch (err) {
      throw helper.createStructuredErrorResponse(
        helper.getInternalServerErrorObj(err)
      );
    }
  }
}

module.exports = MetadataManager;