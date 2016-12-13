'use strict';

/**
 * @ngdoc overview
 * @name angularDropdownApp
 * @description
 * # angularDropdownApp
 *
 * Main module of the application.
 */
angular
  .module('angularDropdownApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
