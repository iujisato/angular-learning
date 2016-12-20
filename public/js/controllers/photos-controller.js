angular.module('alurapic').controller('PhotosController', function($scope, $http) {

  $scope.photos = [];
  $scope.filter = '';

  $http.get('/v1/fotos')
  .then(function(response) {
    $scope.photos = response.data;
  })
  .catch(function(error) {
    console.log(error)
  });
});
