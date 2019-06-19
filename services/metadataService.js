let path = require('path'),
  apiService = require(path.resolve('./services/apiService')),
  CheerioService = require(path.resolve('./services/cheerioService'));


class MetadataService {
  /**
   * 
   * @param {String} url 
   */
  async getMetadata(url) {
    try {
      let html = await apiService.get(url);
      let parsedTags = this.parseMetatags(html);
      console.log(parsedTags);
      return parsedTags;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  /**
   * Function to parse html to get metatags using parserService
   * @param html {String}
   * @return {Object}
   */
  parseMetatags(html) {
    try {
      let cheerioService = new CheerioService(html);
      return cheerioService.getOGData();
    } catch (err) {
      console.log('Error in parsing', err);
    }
  }

}

let metadataService = new MetadataService();
module.exports = metadataService;