function headerController($scope,addItemService){
    $scope.cart = `My Cart`;
    $scope.sign = 'Sign In';
    $scope.itemAdded = addItemService.list;
   $scope.totalPrice = addItemService.totalPrice;
    // Get the added item in cart from addItemService
    
    $scope.deleteItem = function(item){
        addItemService.deleteItem(item);
        $scope.totalPrice = addItemService.totalPrice;        
    }
}

(function (angular){
    'use strict';
    myApp.component('headerComponent', {
    templateUrl: '/src/headerComponent/header.html',
    controller: headerController
});
})(window.angular);


/***************************************************** 
OR, WE CAN GET RID OF INITIALISING FUNCTION (below)
******************************************************/

/*
function headerController($scope){
    $scope.cart = `My Cart`;
    $scope.sign = 'Sign Indfsdasd';
}

myApp.component('headerComponent', {
    templateUrl: '/src/headerComponent/header.html',
    controller: headerController
});
*/
