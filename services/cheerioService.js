let cheerio = require("cheerio"),
  path = require("path"),
  constants = require(path.resolve("./commons/constants"));

class CheerioService {
  constructor(html) {
    this.$ = cheerio.load(html);
  }

  getOGData() {
    try {
      let response = {};
      for (let ogParam in constants.OG_TAG.PARAMS) {
        let query = constants.OG_TAG.BASE.replace(
          "@ogTag@",
          constants.OG_TAG.PARAMS[ogParam].key
        );
        let data;
        if (ogParam === 'images') {
          let imgSrc = this.$(query).attr("content");
          data = imgSrc ? [imgSrc] : null;
        } else
          data = this.$(query).attr("content");
        if (!data && constants.OG_TAG.PARAMS[ogParam].alt) {
          query = constants.OG_TAG.PARAMS[ogParam].alt;
          if (ogParam === "images") {
            data = [];
            let imgs = this.$(query);
            this.$(query).each((i, node) => {
              let imgSrc = this.$(node).attr("src");
              if (imgSrc && imgSrc.includes('http')) {
                data.push(imgSrc);
              }
            });
            response[ogParam] = data;
            continue;
          }
          if (constants.OG_TAG.PARAMS[ogParam].isAltText) {
            data = this.$(query).text();
          } else {
            data = this.$(query).attr("content");
          }
        }
        response[ogParam] = data;
      }
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = CheerioService;