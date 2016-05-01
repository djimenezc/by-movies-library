export function routerConfig ($stateProvider, $urlRouterProvider) {
  //noinspection BadExpressionStatementJS
  'ngInject';
  $stateProvider
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

  $urlRouterProvider.otherwise('/list');
}
