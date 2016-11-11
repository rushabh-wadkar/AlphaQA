(function(){
        
    var app = angular.module("AlphaApp", ["ngRoute"]);
    
    app.config(function($routeProvider){
        $routeProvider
        .when("/login", {
            templateUrl: "login.html",
            controller: 'loginCtrl'
        })
        .when("/register", {
            templateUrl: "register.html",
            controller: 'registerCtrl'
        })
        .otherwise({ redirectTo: '/login'});
    });
    
    
    app.controller("loginCtrl", function($scope){
        $scope.header = "Login";
    });
    
    app.controller("registerCtrl", function($scope){
        $scope.header = "Register";
    });
})();
