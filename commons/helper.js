
let path = require('path'),
  constants = require(path.resolve('./commons/constants'));


class Helper{

  /**
   * create a common success response object for api requests
   * @param response {Object}
   * @param options {Object}
   * @return responseObject {Object}
   */
  createSuccessResponse(response, options ={}) {
    var responseObject = {
      success: true,
      status: options.status || constants.RESPONSE_STATUS.SUCCESS,
      message: options.message || constants.MESSAGES.SUCCESS.DATA_POPULATED,
      data: response
    };
    return responseObject;
  }

  /**
   * Create a common error response object for api requests
   * @param config {Object}
   * @return responseObject {Object}
   */
  createStructuredErrorResponse(config = {}) {
    config.status = config.status || 500;
    var responseObject = {
      success: false,
      status: config.status,
      error: config.error && config.error.message ? config.error.message : config.error || config, // error message
      message: config.message // status message
    };
    if (config.status == constants.RESPONSE_STATUS.INTERNAL_SERVER_ERROR) {
      responseObject.error = config.message;
      responseObject.message = config.error && config.error.message ? config.error.message : config.error;
    }
    return responseObject;
  }

  /**
   * Create internal server error object
   * @param err {String}
   * @return {Object}
   */
  getInternalServerErrorObj(err) {
    return {
      message: constants.MESSAGES.ERROR.INTERNAL_SERVER_ERROR,
      status: constants.RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
      error: err
    }
  }
}

module.exports = new Helper();