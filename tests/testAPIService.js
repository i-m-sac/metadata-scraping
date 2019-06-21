const rp = require('request-promise'),
  path = require('path'),
  metadataService = require((path.resolve('./services/metadataService')));

class TestAPIService {

  /**
   * Function to test if the service can start up without errors
   */
  async healthCheck() {
    try {
      let response = await rp({
        uri: 'http://localhost:3000/health'
      });
      return response === 'Healthy'
    } catch (err) {
      return err;
    }
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Function to check if metadata scraping of og tags works fine
   */
  async metadataTest() {
    try {
      return await metadataService
        .getMetadata("https://www.google.com");
    } catch (err) {
      return err;
    }
  }

}

module.exports = new TestAPIService();