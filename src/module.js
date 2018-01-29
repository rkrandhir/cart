var myApp = angular.module("myApp", []); 

/*
(function(angular){
    'use strict';
    var myApp = angular.module('myApp',['ngComponentRouter','headerComponent','productsComponent']);

    // We must choose what Location Mode the Router should use. We are going to use HTML5 mode locations,
    // so that we will not have hash-based paths. We must rely on the browser to provide pushState support,
    // which is true for most modern browsers.
    myApp.config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })

    //Configure the top level routed App Component.
    .value('$routerRootComponent', 'myApp')
    .component('myApp',{
       template: '<h1>NgRoute</h1>'
    });

})(window.angular);
*/