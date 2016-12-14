angular.module('alurapic').controller('PhotosController', function($scope) {
  $scope.photos = [
    {
      title: 'Leão',
      url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
    },
    {
      title: 'Macaco',
      url: 'http://www.fundosanimais.com/Minis/macaco.jpg'
    },
    {
      title: 'Gato',
      url: 'http://www.fundosanimais.com/Minis/fundos-gatos.jpg'
    }
  ];
});
