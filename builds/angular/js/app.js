var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.artist = {
    "name":"Barot Bellingham",
    "shortname":"Barot_Bellingham",
    "reknown":"Royal Academy of Painting and Sculpture",
    "bio":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
  }
});