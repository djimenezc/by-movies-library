export class DetailController {
  constructor($scope, $http, $log) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.creationDate = 1462012740839;
    this.$scope = $scope;
    this.$http = $http;
    this.$log = $log;

    this._getDetail(2);
  }

  _getDetail(id) {

    this.$http({
      method: 'GET',
      url: `http://localhost:3000/v1/film/${id}`,
      headers: {
        'Content-Type': 'application/JSON'
      }
    }).then((response) => {

      this.$scope.movie = response.data;
    }, (response) => {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      this.$log.error(`http error: ${response.status}`);
    });
  }

}
