var app = angular.module('customersApp' , ['ngRoute', 'google-maps']);

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
      {
        'id':'01',
        'name': 'Bolo da Lourdes',
        'description': 'Bolos e Salgados para festas. Ligue e consulte nossos preços.',
        'phone': '11 3985-3345',
        'address': 'Rua 22 de Agosto, 142',
        'time': 'De segunda a sexta das 10:00hs as 17:00hs',
        'site': 'wwww.bolodalourdes.com.br',
        'banner': 'bolo-da-lourdes.jpg',
        'bannerfull': 'bolo-da-lourdes-full.jpg',
        'map':{'latitude': -23.469309,'longitude': -46.658657}
      },
      {
        'id':'02',
        'name': 'Vanbikes',
        'description': 'Especialista em Speed e Mountain Bikes. Consertos em geral.',
        'phone': '11 3985-9987',
        'address': 'Av. Parada Pinto, 1000',
        'time': 'De segunda a sabádo das 08:00hs as 18:00hs',
        'site': 'www.vanbikes.com.br',
        'banner': 'roda-bike.jpg',
        'bannerfull': 'roda-bike-full.jpg',
        'map':{'latitude': -23.469361,'longitude': -46.65795}
      },
    ];
      $scope.ad = $scope.ads[$routeParams.id-1];
      $scope.map = {
        center: {
            latitude: $scope.ad['map']['latitude'],
            longitude: $scope.ad['map']['longitude']
        },
        zoom: 16,
        options: {
          zoomControl: false,
          maxZoom: 16,
          minZoom: 16,
        }
      };
    });


    app.controller('CustomersController', function($scope){
      $scope.ads = $scope.ads = [
      {
        'id':'01',
        'name': 'Bolo da Lourdes',
        'description': 'Bolos e Salgados para festas. Ligue e consulte nossos preços.',
        'phone': '11 3985-3345',
        'address': 'Rua 22 de Agosto, 142',
        'time': 'De segunda a sexta das 10:00hs as 17:00hs',
        'site': 'wwww.bolodalourdes.com.br',
        'banner': 'bolo-da-lourdes.jpg',
        'bannerfull': 'bolo-da-lourdes-full.jpg',
      },
      {
        'id':'02',
        'name': 'Vanbikes',
        'description': 'Especialista em Speed e Mountain Bikes. Consertos em geral.',
        'phone': '11 3985-9987',
        'address': 'Av. Parada Pinto, 1000',
        'time': 'De segunda a sabádo das 08:00hs as 18:00hs',
        'site': 'www.vanbikes.com.br',
        'banner': 'roda-bike.jpg',
        'bannerfull': 'roda-bike-full.jpg',
        'maps': '',
      },
    ];

    });