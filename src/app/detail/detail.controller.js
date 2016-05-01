export class DetailController {
  constructor($scope, filmService, $log) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.creationDate = 1462012740839;
    this.$scope = $scope;
    this.$log = $log;

    this.$scope.movie = filmService.getFilm(2).then((data) => {
      this.$scope.movie = data;
    }).catch(() => {
      this.$scope.error = 'unable to get the film information';
      $log.log(`Error fetching movie name: ${this.$scope.movie.name}`);
    });

  }

}
