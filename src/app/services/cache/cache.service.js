export class CacheService {

  constructor() {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.creationDate = 1462012740839;

    this._cache = {};

  }

  /**
   * Stores an element identified by the key
   * @param key
   * @param value
     */
  keepInCache(key, value) {

    this._cache[key] = value;
  }

  /**
   * Returns an stored element identified by the key
   * @param key
   * @returns {*}
     */
  getValue(key) {

    return this._cache[key];
  }

  /**
   * Indicates if a key is been used in the map
   * @param key
   * @returns {boolean}
     */
  isElementInCache (key) {

    return !!this._cache[key];
  }

}
