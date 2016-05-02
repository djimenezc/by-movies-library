export class CacheService {

  constructor() {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.creationDate = 1462012740839;

    this.cache = {};

  }

  /**
   * Stores an element identified by the key
   * @param key
   * @param value
     */
  keepInCache(key, value) {

    this.cache[key] = value;
  }

  /**
   * Returns an stored element identified by the key
   * @param key
   * @returns {*}
     */
  getValue(key) {

    return this.cache[key];
  }

}
