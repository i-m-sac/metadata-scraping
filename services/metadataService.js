let path = require('path'),
  apiService = require(path.resolve('./services/apiService')),
  cheerio = require('cheerio');


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
      let head = this.getHTMLHead(html);
      return head;
    } catch (err) {
      console.log('Error in parsing', err);
    }
  }

  getHTMLHead(html) {
    let $ = cheerio.load(html);
    let response = $('meta[property="og:image"]').html();
    return response;
  }

}

let metadataService = new MetadataService();
module.exports = metadataService;