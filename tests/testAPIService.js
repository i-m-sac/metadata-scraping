const rp = require('request-promise'),
  path = require('path'),
  metadataService = (path.resolve('./services/metadataService'));

class TestAPIService {

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

  async metadataTest() {
    try {
      let response = await metadataService
        .getMetadata('https://horseandcountry.tv/app/details/new/Category27106/553%22%3E%3Cmeta');
      return response;
    } catch (err) {
      return err;
    }
  }

}

module.exports = new TestAPIService();