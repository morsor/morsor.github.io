'use strict';

angular.module('morsor.danish', ['ngResource']).
    factory('DanishContent', function($resource){
        return $resource('/json/danish.json', {}, {
            query: {method:'GET', params:{}, isArray:false}
        });
    }
);

angular.module('morsor.english', ['ngResource']).
    factory('EnglishContent', function($resource){
        return $resource('/json/english.json', {}, {
            query: {method:'GET', params:{}, isArray:false}
        });
    }
);

