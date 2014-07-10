var adscatApp = angular.module('adscatApp' , ['ngRoute'])

adscatApp.controller('AdsListCtrl', function($scope , $timeout) {
	angular.element(document).ready(function() {
		new GridScrollFx( document.getElementById( 'grid' ), {
			viewportFactor : 0.4
		});
	});

	$scope.$watch('query', function(newValue, oldValue) {
		$timeout(function() { 
			new GridScrollFx( document.getElementById( 'grid' ), {
				viewportFactor : 0.4
			});
		}, 10);
	});
	
	$scope.ads = [
		{'id':'01','name': 'Fruta na Caixa', 'description': 'Frutas Fresquinhas todos os dias na sua casa', 'image': 'fruta-na-caixa.jpg'},
		{'id':'02','name': 'Van Bikes', 'description': 'Bicicletas motorizadas', 'image': 'roda-bike.jpg'},
		{'id':'03','name': 'Carlinhos Cabeleleiros', 'description': 'Cortes Masculinos', 'image': 'carlinhos.jpg'},
		{'id':'04','name': 'Bolos da Lourdes', 'description': 'Bolos para festas', 'image': 'bolo-lourdes.jpg'},
		{'id':'05','name': 'Balão Mágico', 'description': 'Buffet para festas infantis', 'image': 'balloon.jpg'},
		{'id':'06','name': 'Bar do Ze', 'description': 'Almoço e Lanches', 'image': 'bar-do-ze.jpg'},
		{'id':'07','name': 'Sapataria do futuro', 'description': 'Sapatos sempre novos', 'image': 'sapataria-do-futuro.jpg'},
		{'id':'08','name': 'Aulas de Ingles', 'description': 'Aprenda ingles em 1 mes', 'image': 'aulas-de-ingles.jpg'},
		{'id':'09','name': 'Coffee Breack', 'description': 'Montamos o seu café', 'image': 'coffee.jpg'},
		{'id':'10','name': 'Pincel de Ouro', 'description': 'Pinturas e reformas', 'image': 'pincel-de-ouro.jpg'},
		{'id':'11','name': 'Agencia 2FFs', 'description': 'Criacao de websites', 'image': 'ag2ff.jpg'},			
	]
});


