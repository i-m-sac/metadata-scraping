let cheerio = require("cheerio"),
  path = require("path"),
  constants = require(path.resolve("./commons/constants"));

class CheerioService {
  constructor(html) {
    this.$ = cheerio.load(html);      //loading cheerio object for html
  }

  /**
   *Function to parse html data and return metadata
   * HTML is present in this.$
   */
  getOGData() {
    try {
      let response = {};
      //looping through all ogTags
      for (let ogParam in constants.OG_TAG.PARAMS) {
        let query = constants.OG_TAG.BASE.replace(
          "@ogTag@",
          constants.OG_TAG.PARAMS[ogParam].key
        );
        let data;
        if (ogParam === 'images') {
          let imgSrc = this.$(query).attr("content");
          //making image an array
          data = imgSrc ? [imgSrc] : null;
        } else
          data = this.$(query).attr("content");
        if (!data && constants.OG_TAG.PARAMS[ogParam].alt) {
          //checking for data in alternative tags in case og tags are absent
          //alternative tags are defined in constants
          query = constants.OG_TAG.PARAMS[ogParam].alt;
          if (ogParam === "images") {
            data = [];
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
      throw err;
    }
  }
}

module.exports = CheerioService;