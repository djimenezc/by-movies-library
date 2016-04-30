describe('controller detail', () => {
  let vm;

  beforeEach(angular.mock.module('byMoviesLibrary'));

  beforeEach(inject(($controller) => {
    // spyOn(webDevTec, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
    // spyOn(toastr, 'info').and.callThrough();

    vm = $controller('DetailController');
  }));

  it('should have a timestamp creation date', () => {
    expect(vm.creationDate).toEqual(jasmine.any(Number));
  });

});
