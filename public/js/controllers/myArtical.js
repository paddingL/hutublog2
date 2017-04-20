/**
 * Created by Administrator on 2017/3/5.
 */
hutuBlog.controller('myArtical',function($scope,$http){
    if($scope.userState.length!=0){
        $scope.avatar=$scope.userState.avatar;
    }else{
        $scope.avatar="././avatar/2.jpg";
}

        $http({
            method:'POST',
            url:'/getMyArtical',
            data:{'username':$scope.userState},
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function ( data ) {
                return $.param(data);
            }

        }).success(function(data){
            $scope.data=data;
            console.log( $scope.data)
        })
       //点击发送内容数据
        $scope.postAtricalContent=function(item){
            $scope.$emit('sendParent',item)

        }
    //删除像
    $scope.deleItem=function(item){
        var index= $scope.data.indexOf(item)
        $scope.data.splice(index,1);
        $http({
            method:'POST',
            url:'/delItem',
            data:item,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function ( data ) {
                return $.param(data);
            }

        }).success(function(data){
            if(data=1) {
                alert("删除成功")
            }
        })
    }

})
