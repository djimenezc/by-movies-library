export class DetailController {
  constructor($scope, filmService, $log, $window, $stateParams) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.creationDate = 1462012740839;
    this.$scope = $scope;
    this.$log = $log;

    let filmId = $stateParams.id;

    this.$scope.movie = filmService.getFilm(filmId).then((data) => {
      this.$scope.movie = data;
    }).catch(() => {
      this.$scope.error = 'unable to get the film information';
      $log.log(`Error fetching movie name: ${this.$scope.movie.name}`);
    });

    /**
     * Do a window history back
     */
    $scope.doTheBack = function() {
      $window.history.back();
      $log.log('Back');
    };

  }

}
