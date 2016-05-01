export class ListController {

  constructor(filmService, pagerService, $log, $scope) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.films = [];
    this.creationDate = 1462012740839;
    this.filmService = filmService;
    this.pagerService = pagerService;
    this.$log = $log;
    this.$scope = $scope;
    this.settings = {
      totalPages: 15,
      pageSize: 10,
      totalItems: 145
    };


    this.setPage(1);
  }

  setPage(nPage) {
    if (nPage < 1 || nPage > this.settings.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.settings.totalItems, nPage, this.settings.pageSize);

    // get current page of items
    // vm.items = vm.dummyItems.slice(vm.pager.startIndex, vm.pager.endIndex);

    this.filmService.getFilms(nPage -1, this.settings.pageSize).then((data) => {
      this.$scope.films = data;
    }).catch(() => {
      this.$scope.error = 'unable to get the films information';
      this.$log.log(`Error fetching movies`);
    });
  }

}
