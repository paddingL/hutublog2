hutuBlog.controller('othersCtrl',function($scope,$http){
    (function(){
        $http({
            method:'GET',
            url:'/getData',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        }).success(function(data){
            $scope.data=data;
            console.log( $scope.data)
        })
    })()
    $scope.postAtricalContent=function(item){
        if($scope.userState.length==0){
            alert("请登录！")
            return
        }else{
            $('.artical-tiaozhuan').attr('href','http://127.0.0.1:3000/#/myAtricalContent');
            $scope.$emit('sendParent',item)
        }

    }


})