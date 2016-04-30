
export class FilmService {

  constructor () {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.creationDate = 1462012740839;

    this.films = {
      1 : {
        
      }
    }
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
