export function runBlock ($log, $rootScope, $window) {
  'ngInject';
  $log.debug('runBlock end');
  $rootScope._ = $window._;
}
