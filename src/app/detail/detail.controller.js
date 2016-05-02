export class DetailController {
  constructor($scope, filmService, $log, $window, $stateParams, cacheService) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.creationDate = 1462012740839;
    this.$scope = $scope;
    this.$log = $log;
    //noinspection JSUnresolvedVariable
    this.filmService = filmService;
    //noinspection JSUnresolvedVariable
    this.cacheService = cacheService;

    const filmId = $stateParams.id;

    if(this.cacheService.isElementInCache(filmId)) {

      this.$scope.movie = this.cacheService.getValue(filmId);
    } else {
      this.getElementFromServer(filmId);
    }

    /**
     * Do a window history back
     */
    $scope.doTheBack = function() {
      $window.history.back();
      $log.log('Back');
    };

  }

  /**
   * Fetch film detail information from server
   * @param filmId
     */
  getElementFromServer (filmId) {

    this.$scope.movie = this.filmService.getFilm(filmId).then((data) => {
      this.$scope.movie = data;
      this.cacheService.keepInCache(filmId, data);
    }).catch(() => {
      this.$scope.error = 'unable to get the film information';
      this.$log.log(`Error fetching movie name: ${this.$scope.movie.name}`);
    });
  }

}
