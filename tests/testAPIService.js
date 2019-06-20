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

  /**
   * Function to check if metadata scraping of og tags works fine
   */
  async metadataTest() {
    try {
      let response = await metadataService
        .getMetadata("http://www.google.com");
      // let response = await rp({
      //   uri: 'https://horseandcsountry.tv/app/details/new/Category27106/553%22%3E%3Cmeta'
      // });
      return response;
    } catch (err) {
      return err;
    }
  }

}

module.exports = new TestAPIService();