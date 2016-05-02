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

      cacheService.keepInCache(1, 'test');

      expect(cacheService.getValue(1)).toEqual(jasmine.any(String));
    }));
  });

});
