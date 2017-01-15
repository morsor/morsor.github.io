'use strict';

var app = angular.module(
    'morsor.app',
    ['morsor.danish', 'morsor.english', 'local.static-text', 'ngRoute', 'ngResource']
);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when(
        '/', {
//            redirectTo: '/language/english'
        }
    );
    $routeProvider.when(
        '/error', {
            templateUrl: '/partials/error.html',
            controller: ErrorController
        }
    );
    $routeProvider.when(
        '/language/:language', {
            templateUrl: '/partials/language-versioned-content.html',
            controller: LanguageVersionedContentController
        }
    );
    $routeProvider.otherwise({redirectTo: '/language/danish'});
    $locationProvider.html5Mode({
        enabled:true,
        requireBase: false
    })
});

app.filter('stretch', function() {
        return function(input) {
            var stretchedInput = '';
            if (input != null && input.length != null && input.length > 0) {
                stretchedInput = input.charAt(0);
                for (var i = 1; i < input.length; i++) {
                    stretchedInput = stretchedInput + ' ' + input.charAt(i);
                }
            }
            return stretchedInput;
        }
    }
);

