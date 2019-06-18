let cheerio = require('cheerio');

class CheerioService {
  constructor(html) {
    this.$ = cheerio.load(html)
  }

  getMetadataTitle() {
    let title = this.getOGTitle();
    if (!title) {
      title = this.getTitle();
    }
    return title;
  }

  getTitle() {
    return this.$("title").text()
  }

  getOGTitle() {
    return this.$("meta[property='og:title']").attr("content");
  }

  getMetadataDescription() {
    let description = this.getOGDescription();
    if (!description) {
      description = this.getDescription();
    }
    return description;
  }

  getDescription() {
    return this.$("[name='description']").attr("content");
  }

  getOGDescription() {
    return this.$("meta[property='og:description']").attr("content");
  }

  getMetadataImage() {
    return this.$("meta[property='og:image']").attr("content");
  }

  getMetadataURL() {
    let url = this.getOGURL();
    if (!url) {
      url = this.getURL();
    }
    return url;
  }

  getOGURL() {
    return this.$("meta[property='og:url']").attr("content");
  }

  getURL() {
    return this.$("[name='url']").attr("content");
  }

  getMetadataType() {
    let type = this.getOGType();
    return type;
  }

  getOGType() {
    return this.$("meta[property='og:type']").attr("content");
  }

}

module.exports = CheerioService;