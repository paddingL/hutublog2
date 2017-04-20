/**
 * Created by Administrator on 2017/3/2.
 */
var hutuBlog=angular.module('hutuBlog',['ngRoute'])
/*    .config(['$httpProvider', function ( $httpProvider ) {
        $httpProvider.defaults.transformRequest = function ( data ) {
            var str = '';
            for( var i in data ) {
                str += i + '=' + data[i] + '&';
            }
            return str.substring(0,str.length-1);
        }
    }])*/

 .config(['$routeProvider',function($routeProvider){
 console.log(123)
 $routeProvider
.when('/',{
 templateUrl:'view/artical.html',
 controller:'othersCtrl'
 })
.when('/write',{
    templateUrl:'view/newWrite.html',
    controller:'newWrite'
})
 .when('/myArtical',{
     templateUrl:'view/myArtical.html',
     controller:'myArtical'
 })
.when('/myAtricalContent',{
    templateUrl:'view/myAtricalContent.html',
    controller:'myAtricalContent'
})
.when('/setSelfData',{
    templateUrl:'view/setSelfData.html',
    controller:'setSelfData'
})
.when('/dustbin',{
 templateUrl:'view/dustbin.html',
 controller:'dustbin'
})
 .when('/getdraft',{
     templateUrl:'view/draft.html',
     controller:'draft'
 });
 }]);

