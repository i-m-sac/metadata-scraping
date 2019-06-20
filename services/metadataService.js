let path = require('path'),
  apiService = require(path.resolve('./services/apiService')),
  CheerioService = require(path.resolve('./services/cheerioService')),
  cacheService = require(path.resolve('./services/cacheService.js'));


class MetadataService {

  /**
   * Function to get site metadata from url
   * @param {String} url 
   */
  async getMetadata(url) {
    try {
      let cacheResponse = cacheService.getMetadata(url);
      if (cacheResponse) {        //Checks for cached data and returns if present
        return cacheResponse;
      }
      let html = await apiService.get(url);
      let parsedTags = this.parseMetatags(html);
      cacheService.saveMetadata(url, parsedTags);
      return parsedTags;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Function to parse html to get metatags using cheerio parsers
   * @param html {String}
   * @return {Object}
   */
  parseMetatags(html) {
    try {
      let cheerioService = new CheerioService(html);
      return cheerioService.getOGData();
    } catch (err) {
      throw err;
    }
  }

}

module.exports = new MetadataService();