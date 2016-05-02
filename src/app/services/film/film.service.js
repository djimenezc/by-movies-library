export class FilmService {

  constructor($http, $q) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.creationDate = 1462012740839;
    this.$http = $http;
    this.$q = $q;

  }

  /**
   * Returns an film identified by the id
   * @param id
   * @returns {Function}
   */
  getFilm(id) {
    var defer = this.$q.defer();

    this.$http({
      method: 'GET',
      url: `http://localhost:3000/v1/film/${id}`,
      headers: {
        'Content-Type': 'application/JSON'
      }
    }).then((response) => {

      defer.resolve(response.data);
    }, (response) => {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      defer.reject(response);
    });

    return defer.promise;
  }

  /**
   * Returns a films set identified by the page number and the page size
   * @param nPage
   * @param pageSize
   * @returns {Function}
     */
  getFilms(nPage, pageSize) {

    var defer = this.$q.defer();

    this.$http({
      method: 'GET',
      url: `http://localhost:3000/v1/films?records=${pageSize}&page=${nPage}`,
      headers: {
        'Content-Type': 'application/JSON'
      }
    }).then((response) => {

      defer.resolve(response.data);
    }, (response) => {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      defer.reject(response);
    });

    return defer.promise;
  }

}
