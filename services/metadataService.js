let path = require('path'),
  apiService = require(path.resolve('./services/apiService')),
  cheerio = require('cheerio');


class MetadataService {
  async getMetadata(url) {
    try {
      let html = await apiService.get(url);
      return html;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

}

let metadataService = new MetadataService();
module.exports = metadataService;