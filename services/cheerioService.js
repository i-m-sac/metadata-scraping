let cheerio = require('cheerio');

class CheerioService {
  constructor(html) {
    this.$ = cheerio.load(html)
  }

  getMetadataTitle() {
    let result = this.$("meta[property='og:title']").attr("content");
    console.log('Title', result);
    return result;
  }

  getMetadataDescription() {
    return this.$("meta[property='og:description']").attr("content");
  }

  getMetadataImage() {
    return this.$("meta[property='og:image']").attr("content");
  }
}

module.exports = CheerioService;