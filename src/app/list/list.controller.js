export class ListController {

  constructor(filmService, pagerService, $log, $scope) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.creationDate = 1462012740839;
    this.filmService = filmService;
    this.pagerService = pagerService;
    this.$log = $log;
    this.$scope = $scope;
    this.settings = {
      pageSize: 10,
      totalItems: 145
    };

    this.settings.totalPages = ListController.calculateTotalPages(this.settings.totalItems, this.settings.pageSize);

    this.setPage(1);
  }

  static calculateTotalPages (totalItems, pageSize) {

    return Math.ceil(totalItems / pageSize);
  }

  setPage(nPage) {
    if (nPage < 1 || nPage > this.settings.totalPages) {
      return;
    }

    //noinspection JSUnusedGlobalSymbols
    this.pager = this.pagerService.getPager(this.settings.totalItems, nPage, this.settings.pageSize);


    this.filmService.getFilms(nPage -1, this.settings.pageSize).then((data) => {
      this.$scope.films = data;
    }).catch(() => {
      this.$scope.error = 'unable to get the films information';
      this.$log.log(`Error fetching movies`);
    });
  }

}
