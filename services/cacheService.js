let NodeCache = require('node-cache'),
  cache = new NodeCache();

class CacheService {

  /**
   * Fuction to store metadata in cache
   * @param key {String}
   * @param obj {Object} data to be stored
   */
  saveMetadata(key, obj) {
    let success = cache.set(key, obj, 10800); //ttl set to 3 hrs
  }

  deleteMetadata(key) {
    let response = cache.del(key);
  }

  /**
   * Function to retrieve metadata from cache using url
   * @param key {String} url
   * @return {Object}
   */
  getMetadata(key) {
    let response = cache.get(key);
    return response;
  }
}

module.exports = new CacheService();