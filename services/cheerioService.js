let cheerio = require('cheerio'),
  path = require('path'),
  constants = require(path.resolve('./commons/constants'));

class CheerioService {
  constructor(html) {
    this.$ = cheerio.load(html)
  }
  
  getOGData(){
    try{
      let response = {};
      for(let ogParam in constants.OG_TAG.PARAMS){
        let query = constants.OG_TAG.BASE
          .replace('@ogTag@', constants.OG_TAG.PARAMS[ogParam].key);
        let data = this.$(query).attr("content");
        if(!data && constants.OG_TAG.PARAMS[ogParam].alt){
          query = constants.OG_TAG.PARAMS[ogParam].alt;
          if(ogParam === 'img'){
            data = this.$(query)
            continue;
          }
          if(constants.OG_TAG.PARAMS[ogParam].isAltText){
            data = this.$(query).text()
          }
          else {
            data = this.$(query).attr("content")
          }
        }
        response[ogParam] = data;
      }
      return response;
    } catch(err){
      console.log(err);
      throw err;
    }
  }

}

module.exports = CheerioService;