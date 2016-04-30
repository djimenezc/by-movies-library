
export class FilmService {

  constructor ($http) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.creationDate = 1462012740839;
    this.$http = $http;
  }

  /**
   *
   * @param id
   * @returns {{id: *}}
     */
  getFilm(id) {

    return {
      id: id
    }
  }
}
