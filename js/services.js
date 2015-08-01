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

angular.module('local.static-text', ['ngResource']).
    factory('LocalStaticText', function($resource)  {
        return {
            load: function() {
                return $resource('./json/local-static-text.json').get();
            },
            synchronousGetAll: function() {
                var staticText = {};
                $.ajax({
                    url: './json/local-static-text.json', async: false, dataType: 'json',
                    success: function (response) {
                        staticText = $.parseJSON(JSON.stringify(response));
                    }
                });
                return staticText;
            },
            synchronousGet: function(key) {
                var staticText = {};
                $.ajax({
                    url: './json/local-static-text.json', async: false, dataType: 'json',
                    success: function (response) {
                        staticText = $.parseJSON(JSON.stringify(response));
                    }
                });
                return eval('(staticText.' + key + ')');
            }
        }
    }
);

