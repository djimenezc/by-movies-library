export function routerConfig ($stateProvider, $urlRouterProvider) {
  //noinspection BadExpressionStatementJS
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('filmDetail', {
      url: '/film/:id',
      templateUrl: 'app/detail/detail.html',
      controller: 'DetailController',
      controllerAs: 'detail'
    })
    .state('filmList', {
      url: '/list',
      templateUrl: 'app/list/list.html',
      controller: 'ListController',
      controllerAs: 'list'
    });

  $urlRouterProvider.otherwise('/');
}
