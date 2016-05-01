export class ListController {
  constructor(filmService) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.films = [];
    this.creationDate = 1462012740839;

    this.getFilms(filmService);
  }

  getFilms(filmService) {

    this.films = filmService.getFilms();

    angular.forEach(this.films, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

}
