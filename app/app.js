var app = angular.module('traverseApp', [
  'ngStorage',
  'ngRoute',
  'ngModal',
  'uiGmapgoogle-maps',
  'ngCookies',
  'ui.bootstrap'
  ]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/trips', {
        controller: 'tripsController',
        templateUrl: 'js/trips/trips.html'
    })
    .when('/', {
        controller: 'authController',
        templateUrl: 'js/auth/auth.html'
    })
    // .when('/trips/:tripId', {
    //     controller: 'eventsController',
    //     templateUrl: 'js/events/events.html'
    // })
    .when('/trips/:tripId/events', {
        controller: 'eventsController',
        templateUrl: 'js/events/events.html'
    })
    .when('/trips/:tripId/events/:eventId', {
        controller: 'eventsController',
        templateUrl: 'js/events/event.html'
    })
    .when('/trips/:tripId/tags', {
        controller: 'tagsController',
        templateUrl: 'js/tags/tags.html'
    })
    .when('/trips/:tripId/new_event', {
        controller: 'eventsController',
        templateUrl: 'js/events/new_event.html'
    })
    .when('/trips/:tripId/events/:eventId/update_event', {
        controller: 'eventsController',
        templateUrl: 'js/events/update_event.html'
    })

    .when('/trips/:tripId/events/tag/:tagId', {
        controller: 'eventsController',
        templateUrl: 'js/tags/events_by_tag.html'
    })

    .when('/facebook', {
        controller: 'facebookController',
        templateUrl: 'views/facebook.html'
    })
    .when('/instagram', {
        controller: 'instagramController',
        templateUrl: 'js/events/instagram/instagram.html'
    })

    .when('/trips/:tripId/mapView', {
        controller: 'googleMapsController',
        templateUrl: 'js/events/googleMaps/maps.html'
    })


    .otherwise({ redirectTo: '/' })
}]);

// in case we decide to do single event views later:

    // .when('/trips/:tripId/events/:eventId', {
    //     controller: 'eventsController',
    //     templateUrl: 'js/events/event.html'
    // })
