describe('service cache', () => {

  beforeEach(angular.mock.module('byMoviesLibrary'));

  it('should be registered', inject(cacheService => {
    expect(cacheService).not.toEqual(null);
  }));

  describe('get function', () => {
    it('should exist', inject(cacheService => {
      expect(cacheService.getValue).not.toBeNull();
    }));

    it('should return stored a element', inject(cacheService => {

      cacheService._cache[1] = 'test';

      expect(cacheService.getValue(1)).toEqual(jasmine.any(String));
    }));
  });

  describe('is element in cache ', () => {

    it('should return stored a element', inject(cacheService => {

      cacheService._cache[1] = 'test';

      expect(cacheService.isElementInCache(1)).toBeTruthy();
    }));
  });

  describe('keep element in cache ', () => {

    it('should an element', inject(cacheService => {

       cacheService.keepInCache(1, 'test');

      expect(cacheService._cache[1]).toBeDefined();
      expect(cacheService._cache[1]).toEqual('test');
    }));
  });

});
