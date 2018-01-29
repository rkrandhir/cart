function productsController($scope, $http, addItemService){
    $scope.price = addItemService.totalPrice;
    
    $http({
    method : "GET",
    url : '../../data/product.json'
  	}).then(function(response){
		$scope.products = response.data.products;
		$scope.productLength = $scope.products.productList.length;
        
	});
    
   // addToCart frunction added item to our service defined in item-added.service.js
    $scope.addToCart = function (item){
        addItemService.addToCart(item); 
        //$scope.price = addItemService.totalPrice; 
    };
}

(function (angular){
    'use strict';
    myApp.component('productsComponent', {
    templateUrl: '/src/productsComponent/products.html',
    controller: productsController
    });

})(window.angular);
