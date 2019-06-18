/**
 * Created by jithu on 24-01-2017.
 */
let path = require('path'),
  constants = require(path.resolve('./commons/constants'));


/**
 * create a common success response object for api requests
 * @param response {Object}
 * @param options {Object}
 * @return responseObject {Object}
 */
async function createSuccessResponse(response, options) {
  if (!options) {
    options = {};
  }
  var responseObject = {
    success: true,
    status: options.status || constants.RESPONSE_STATUS.SUCCESS,
    message: options.message || constants.MESSAGES.SUCCESS.DATA_POPULATED,
    data: response
  };
  return responseObject;
}

/**
 * create a common error response object for api requests
 * @param error {Object}
 * @param options {Object}
 * @return responseObject {Object}
 */
function createErrorResponse(error, options) {
  var responseObject = {
    success: false,
    status: options.status,
    error: error,
    message: error.message
  };
  return responseObject;
}

/**
 * create a common error response object for api requests
 * @param config {Object}
 * @return responseObject {Object}
 */
function createStructuredErrorResponse(config) {
  config.status = config.status || 500;
  var responseObject = {
    success: false,
    status: config.status,
    error: config.error && config.error.message ? config.error.message : config.error, // error message
    message: config.message // status message
  };
  if (config.status == constants.RESPONSE_STATUS.INTERNAL_SERVER_ERROR) {
    responseObject.error = config.message;
    responseObject.message = config.error && config.error.message ? config.error.message : config.error;
  }
  if (config.error && config.error.stack) {
    log.error(config.error.stack)
  }
  return responseObject;
}


module.exports = {
  createSuccessResponse: createSuccessResponse,
  createErrorResponse: createErrorResponse,
  createStructuredErrorResponse: createStructuredErrorResponse
};