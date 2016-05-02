export class CacheService {

  constructor() {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.creationDate = 1462012740839;

    this.cache = {};

  }
  
  keepInCache(key, value) {
    
    this.cache[key] = value;
  }
  
  getValue(key) {
    
    return this.cache[key];
  }

}
