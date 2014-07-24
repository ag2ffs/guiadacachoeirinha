var app = angular.module('customersApp' , ['ngRoute']);

  app.config(function($routeProvider){
  	$routeProvider.when('/',
  	{
  		controller: 'CustomersController',
  		templateUrl: 'app/views/list.html'
  	})
  	.when('/detail/:id',
  	{
  		controller: 'OrdersController',
  		templateUrl: 'app/views/detail.html'
  	})
  });

  app.controller('OrdersController', function($scope , $routeParams){
  	$scope.ads = $scope.ads = [
    {'id':'01','name': 'Fruta na Caixa', 'description': 'Frutas Fresquinhas todos os dias na sua casa', 'image': 'fruta-na-caixa.jpg'},
    {'id':'02','name': 'Van Bikes', 'description': 'Bicicletas motorizadas', 'image': 'roda-bike.jpg'},
    {'id':'03','name': 'Carlinhos Cabeleleiros', 'description': 'Cortes Masculinos', 'image': 'carlinhos.jpg'},
    {'id':'04','name': 'Bolos da Lourdes', 'description': 'Bolos para festas', 'image': 'bolo-lourdes.jpg', 'imagefull':'bolo-da-lourdes-full.jpg'},
    {'id':'05','name': 'Balão Mágico', 'description': 'Buffet para festas infantis', 'image': 'balloon.jpg'},
    {'id':'06','name': 'Bar do Ze', 'description': 'Almoço e Lanches', 'image': 'bar-do-ze.jpg'},
    {'id':'07','name': 'Sapataria do futuro', 'description': 'Sapatos sempre novos', 'image': 'sapataria-do-futuro.jpg'},
    {'id':'08','name': 'Aulas de Ingles', 'description': 'Aprenda ingles em 1 mes', 'image': 'aulas-de-ingles.jpg'},
    {'id':'09','name': 'Coffee Breack', 'description': 'Montamos o seu café', 'image': 'coffee.jpg'},
    {'id':'10','name': 'Pincel de Ouro', 'description': 'Pinturas e reformas', 'image': 'pincel-de-ouro.jpg'},
    {'id':'11','name': 'Agencia 2FFs', 'description': 'Criacao de websites', 'image': 'ag2ff.jpg'},     
  ];
    $scope.ad = $scope.ads[$routeParams.id-1];
  });


  app.controller('CustomersController', function($scope){
  	$scope.ads = $scope.ads = [
    {'id':'01','name': 'Fruta na Caixa', 'description': 'Frutas Fresquinhas todos os dias na sua casa', 'image': 'fruta-na-caixa.jpg'},
    {'id':'02','name': 'Van Bikes', 'description': 'Bicicletas motorizadas', 'image': 'roda-bike.jpg'},
    {'id':'03','name': 'Carlinhos Cabeleleiros', 'description': 'Cortes Masculinos', 'image': 'carlinhos.jpg'},
    {'id':'04','name': 'Bolos da Lourdes', 'description': 'Bolos para festas', 'image': 'bolo-lourdes.jpg','imagefull':'bolo-da-lourdes-full.jpg'},
    {'id':'05','name': 'Balão Mágico', 'description': 'Buffet para festas infantis', 'image': 'balloon.jpg'},
    {'id':'06','name': 'Bar do Ze', 'description': 'Almoço e Lanches', 'image': 'bar-do-ze.jpg'},
    {'id':'07','name': 'Sapataria do futuro', 'description': 'Sapatos sempre novos', 'image': 'sapataria-do-futuro.jpg'},
    {'id':'08','name': 'Aulas de Ingles', 'description': 'Aprenda ingles em 1 mes', 'image': 'aulas-de-ingles.jpg'},
    {'id':'09','name': 'Coffee Breack', 'description': 'Montamos o seu café', 'image': 'coffee.jpg'},
    {'id':'10','name': 'Pincel de Ouro', 'description': 'Pinturas e reformas', 'image': 'pincel-de-ouro.jpg'},
    {'id':'11','name': 'Agencia 2FFs', 'description': 'Criacao de websites', 'image': 'ag2ff.jpg'},     
  ];

  });