describe('service film', () => {

  beforeEach(angular.mock.module('byMoviesLibrary'));

  it('should be registered', inject(filmService => {
    expect(filmService).not.toEqual(null);
  }));

  describe('getFilm function', () => {
    it('should exist', inject(filmService => {
      expect(filmService.getFilm).not.toBeNull();
    }));

    it('should return an object', inject(filmService => {

      let filmDetail = filmService.getFilm(4);

      expect(filmDetail).toEqual(jasmine.any(Object));
      expect(filmDetail.id).toEqual(jasmine.any(Number));
    }));
  });

});
