let rp = require('request-promise');

class APIService {

  constructor() {
    this.headers = {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.80 Safari/537.36'
    }
  }

  /**
   * Perform get request
   * @param {String} url 
   * @param {Object} options 
   */
  async get(url, options = {}) {
    try {
      let request = {
        uri: url,
        headers: options.headers ? options.headers : this.headers
      };
      return await rp(request);
    } catch (err) {
      throw (err);
    }
  }
}

let apiService = new APIService();
module.exports = apiService;