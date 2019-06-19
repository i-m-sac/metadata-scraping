let NodeCache = require('node-cache'),
  cache = new NodeCache();

class CacheService {
  saveMetadata(key, obj) {
    let success = cache.set(key, obj, 10000);
  }

  deleteMetadata(key) {
    let response = cache.del(key);
  }

  getMetadata(key) {
    let response = cache.get(key);
    if (response) {
      console.log('cache hit');
    }
    return response;
  }
}

module.export = CacheService;