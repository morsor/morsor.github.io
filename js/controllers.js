'use strict';


function SharedResourceController($scope, LocalStaticText) {

    $scope._ = LocalStaticText.load();

    $scope.currentYear = new Date().getFullYear();

}

var languages = ['danish', 'english'];

var defaultLanguage = 'english';

function LanguageVersionedContentController($scope, $location, $routeParams, DanishContent, EnglishContent) {
    
    var requestParamLanguage = $location.search()['language'];

    // Order of language resolution: Request parameter, then path parameter, then default
    if ($.inArray(requestParamLanguage, languages) != -1) {
        $scope.language = requestParamLanguage;
    } else if ($.inArray($routeParams.language, languages) != -1) {
        $scope.language = $routeParams.language;
    } else {
        $scope.language = defaultLanguage;
    }

    if ($scope.language == 'danish') {
        $scope.languageVersioned = DanishContent.query();
        $scope.selectableLanguage = "english";
    } else {
        $scope.languageVersioned = EnglishContent.query();
        $scope.selectableLanguage = "danish";
    }

}

function ErrorController($scope) {
    $scope.languages = languages;
}
