
//CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService',
     function($scope, cityService){
         
         $scope.city = cityService.city;
         
         $scope.$watch('city', function(newVal, oldVal){
             
             cityService.city = $scope.city;
             
         })
                                             
}]);


weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', '$http', 'cityService',
     function($scope, $resource, $routeParams, $http, cityService){
         
         $scope.city = cityService.city;
         $scope.days = $routeParams.days || '2';
         
         //API call
         var url = "api.openweathermap.org/data/2.5/forecast?id=524901&appid=b6907d289e10d714a6e88b30761fae22";
         
         
        $http.get("http://api.openweathermap.org/data/2.5/forecast?APPID=eff01af20df3abb14accdaab4796b9e3&q="+$scope.city)
        .then(function(response){ 
            console.log(response.data);
            $scope.weatherResult = response.data;
        });
         
         
          
//         $scope.weatherAPI = $resource(url, 
//            {callback: "JSON_CALLBACK"},
//            {get: { method: "JSONP"}}
//         );
         
        
         //q and cnt are api parameters
//         $scope.weatherResult = $scope.weatherAPI.get(
//             {
////                 q: $scope.city,
////                 cnt: $scope.days
//                 
//             }
//         )
//         
//             
         
         //formatter functions
         $scope.convertToCelcius = function(degK){
             
             return Math.round(300 - degK)
         }
         
         $scope.convertToDate = function(dt_txt){
             var time1 = new Date(dt_txt).toString().substring(0,21);
             return time1;
         }
                                             
}]);