'use strict';

function SharedResourceController($scope, LocalStaticText) {

    $scope._ = LocalStaticText.load();

    $scope.currentYear = new Date().getFullYear();

}

var languages = new Array('danish', 'english');

function LanguageVersionedContentController($scope, $location, $routeParams, DanishContent, EnglishContent) {
    if ($.inArray($routeParams.language, languages) != -1) {
        $scope.language = $routeParams.language;
        if ($.inArray($routeParams.language, languages) == 0) {
            $scope.languageVersioned = DanishContent.query();
            $scope.selectableLanguage = "english";
        } else {
            $scope.languageVersioned = EnglishContent.query();
            $scope.selectableLanguage = "danish";
        }
    } else {
        $location.path('/error');
    }
}

function ErrorController($scope) {
    $scope.languages = languages;
}

