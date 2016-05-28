'use strict';

/* App Module */

var bookingTicketApp = angular.module('bookingTicketApp', [
  'ngRoute',
  'bookingTicketAnimations',
  'bookingTicketControllers',
  'bookingTicketFilters',
  'bookingTicketServices'
]);

bookingTicketApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'partials/Dashboard.html',
        controller: 'DashboardCtrl'
      }).
      when('/login', {
        templateUrl: 'partials/Login.html',
        controller: 'LoginCtrl'
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }]);
