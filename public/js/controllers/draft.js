/**
 * Created by Administrator on 2017/3/15.
 */
hutuBlog.controller('draft',function($scope,$http){

    $http({
        method:'POST',
        url:'/getdraft',
        data:{'username':$scope.userState},
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: function ( data ) {
            return $.param(data);
        }

    }).success(function(data){
        $scope.articalHeader=data[0].header;
        $scope.articalContent=data[0].content;
    })
    $scope.isShow=true;
    var watch = $scope.$watch('articalContent',function(newValue,oldValue, scope){
        if(oldValue!=newValue){
            if(newValue.length>0){
                $scope.isShow=false;
            }else{
                $scope.isShow=true;
            }

        };


    });
    $scope.emportyDraft=function(){
        $http({
            method:'GET',
            url:'/emportyDraft',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        }).success(function(data){
            if(data=="1"){
                alert("清除成功！！")
            }
        });
        $scope.articalHeader="";
        $scope.articalContent="";
    }
$scope.postDraft=function(){
    var self={
        "header" : $scope.articalHeader,
        "content" : $scope.articalContent,
        "datetime":new Date(),
        "avatar": $scope.userState.avatar
    }
    console.log(self)
    $http({
        method:'POST',
        url:'/postDraft',
        data:self,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: function ( data ) {
            return $.param(data);
        }
    }).success(function(data){
        if(data=="1"){

            alert("发送成功")
        }else if(data=="-3"){

            alert("请联系管理员")
        }
        console.log(data)
    })

    $scope.articalHeader="";
    $scope.articalContent="";
    window.location.href="#/myArtical"
}

})


