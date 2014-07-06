var adscatApp = angular.module('adscatApp' , [])

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
		{'name': 'Webgoal', 'description': 'Produtos Web Software', 'image': 'webgoal.jpg'},
		{'name': 'Roda de Bikes', 'description': 'Bicicletas motorizadas', 'image': 'roda-bike.jpg'},
		{'name': 'Carlinhos Cabeleleiros', 'description': 'Cortes Masculinos', 'image': 'carlinhos.jpg'},
		{'name': 'Bolos da Lurdes', 'description': 'Bolos para festas', 'image': 'bolo-lourdes.jpg'},
		{'name': 'Fruta na Caixa', 'description': 'Frutas Fresquinhas todos os dias na sua casa', 'image': 'fruta-na-caixa.jpg'},
		{'name': 'Balão Mágico', 'description': 'Buffet para festas infantis', 'image': 'balloon.jpg'},
		{'name': 'Bar do Ze', 'description': 'Almoço e Lanches', 'image': 'bar-do-ze.jpg'},
		{'name': 'Sapataria do futuro', 'description': 'Sapatos sempre novos', 'image': 'sapataria-do-futuro.jpg'},
		{'name': 'Aulas de Ingles', 'description': 'Aprenda ingles em 1 mes', 'image': 'aulas-de-ingles.jpg'},
		{'name': 'Coffee Breack', 'description': 'Montamos o seu café', 'image': 'coffee.jpg'},
		{'name': 'Pincel de Ouro', 'description': 'Pinturas e reformas', 'image': 'pincel-de-ouro.jpg'},
		{'name': 'Agencia 2FFs', 'description': 'Criacao de websites', 'image': 'ag2ff.jpg'},			
	]
});