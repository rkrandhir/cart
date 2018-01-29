myApp.controller('MyController', ['$scope','$http', function($scope, $http){
	$scope.products = 'My Shopping Cart';
	$scope.b ='';
	$scope.itemAdded = [];
	
	$http({
    method : "GET",
    url : '../data/product.json'
  	}).then(function(response){
		$scope.products = response.data.products;
		$scope.productLength = $scope.products.productList.length;
	});

	$scope.addToCart = function(item){
		$scope.itemAdded.push(item);
	}
}]);


