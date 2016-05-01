export class ListController {

  constructor(filmService, pagerService) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.films = [];
    this.creationDate = 1462012740839;
    this.filmService = filmService;
    this.pagerService = pagerService;
    this.settings = {
      totalPages: 15,
      pageSize: 10,
      totalItems: 145
    };


    this.setPage(1);
  }

  setPage(page) {
    if (page < 1 || page > this.settings.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.settings.totalPages, page, this.settings.pageSize);

    // get current page of items
    // vm.items = vm.dummyItems.slice(vm.pager.startIndex, vm.pager.endIndex);
    this.getFilms(this.filmService);
  }

  getFilms(filmService) {

    this.films = filmService.getFilms();

    angular.forEach(this.films, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

}
