export class ListController {

  constructor(filmService, pagerService, $log, $scope, $location) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    const params = $location.search();

    this.creationDate = 1462012740839;
    this.filmService = filmService;
    this.pagerService = pagerService;
    this.$log = $log;
    this.$scope = $scope;
    this.$location = $location;
    this.settings = {
      pageSize: parseInt(params.records) ? parseInt(params.records) : 10,
      totalItems: 145,
      page: parseInt(params.page) ? parseInt(params.page) : 1
    };

    this.settings.totalPages = ListController.calculateTotalPages(this.settings.totalItems, this.settings.pageSize);

    this.setPage(this.settings.page);
  }

  /**
   * Calculates the maximum number of pages based on the number of
   * element to paginate and the page size
   * @param totalItems
   * @param pageSize
   * @returns {number}
   */
  static calculateTotalPages(totalItems, pageSize) {

    return Math.ceil(totalItems / pageSize);
  }

  /**
   * Change tha page displayed to nPage
   * @param nPage
   */
  setPage(nPage) {
    if (nPage < 1 || nPage > this.settings.totalPages) {
      return;
    }

    this.$location.search('page', nPage);
    this.$location.search('records', this.settings.pageSize);

    //noinspection JSUnusedGlobalSymbols
    this.pager = this.pagerService.getPager(this.settings.totalItems, nPage, this.settings.pageSize);


    this.filmService.getFilms(nPage - 1, this.settings.pageSize).then((data) => {
      this.$scope.films = data;
    }).catch(() => {
      this.$scope.error = 'unable to get the films information';
      this.$log.log(`Error fetching movies`);
    });
  }

}
