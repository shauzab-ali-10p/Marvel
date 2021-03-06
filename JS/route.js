marvellApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/characters', {
        templateUrl: 'Templates/characterList.html',
        controller: 'CharacterListCtrl'
      }).
      when('/characters/:characterID', {
        templateUrl: 'Templates/characterDetail.html',
        controller: 'CharacterDetailCtrl'
      }).
	  when('/characters:navigate', {
        templateUrl: 'Templates/characterList.html',
        controller: 'CharacterListCtrl'
      }).
      otherwise({
        redirectTo: '/characters'
      });
  }]);