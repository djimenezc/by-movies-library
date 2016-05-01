/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { DetailController } from './detail/detail.controller';
import { ListController } from './list/list.controller';
import { FilmService } from './services/film/film.service';
import { PagerService } from './services/pager.service';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

//noinspection JSUnusedLocalSymbols,Eslint
let lodash = window._;

angular.module('byMoviesLibrary', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('_', lodash)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('filmService', FilmService)
  .service('pagerService', PagerService)
  .controller('MainController', MainController)
  .controller('ListController', ListController)
  .controller('DetailController', DetailController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
