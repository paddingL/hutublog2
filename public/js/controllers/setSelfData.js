/**
 * Created by Administrator on 2017/3/12.
 */
/**
 * Created by Administrator on 2017/3/5.
 */
hutuBlog.controller('setSelfData',function($scope,$http){
    $scope.checkbox=false;
    $scope.email=$scope.userState.email;
    $scope.phone=$scope.userState.phone;

$scope.setMyData=function() {
    /* $http({
     method:'GET',
     url:'/setSelfData',
     headers: {
     'Content-Type': 'application/x-www-form-urlencoded'
     }
     }).success(function(data){
     alert("³É¹¦");
     window.location = "/";
     })*/

    $.ajax({
        url: '/getMyData',
        type: 'POST',
        cache: 'false',
        data: new FormData($('#showDataForm')[0]),
        processData: false,
        contentType: false

    }).done(function (res) {
        alert(res)
    })
    $scope.file="";
    $scope.email="";
    $scope.phone="";
    $scope.password="";

}

})
