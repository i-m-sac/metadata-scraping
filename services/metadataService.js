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

  parseMetatags(html) {
    try {
      let cheerioService = new CheerioService(html);
      let ogTags = {
        title: cheerioService.getMetadataTitle(),
        description: cheerioService.getMetadataDescription(),
        url: cheerioService.getMetadataURL(),
        type: cheerioService.getMetadataType(),
        images: cheerioService.getMetadataImage()
      }
      return ogTags;
    } catch (err) {
      console.log('Error in parsing', err);
    }
  }

}

let metadataService = new MetadataService();
module.exports = metadataService;