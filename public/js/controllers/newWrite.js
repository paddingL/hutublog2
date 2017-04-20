/**
 * Created by Administrator on 2017/3/5.
 */
hutuBlog.controller('newWrite',function($scope,$http){
    $scope.articalHeader="";
    $scope.articalContent="";

    $scope.insertData=function(){
        var self={
            "header" : $scope.articalHeader,
            "content" : $scope.articalContent,
            "datetime":new Date(),
           "avatar": $scope.userState.avatar
        }
        console.log(self)
        /* $.post("/digest",{
         "username" : $("#username").val(),
         "password" : $("#password").val()
         }*/
        $http({
            method:'POST',
            url:'/postData',
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
    $scope.savecaogao=function(){
        var self={
            "header" : $scope.articalHeader,
            "content" : $scope.articalContent,
            "datetime":new Date(),
            "avatar": $scope.userState.avatar
        }
        console.log(self)
        /* $.post("/digest",{
         "username" : $("#username").val(),
         "password" : $("#password").val()
         }*/
        $http({
            method:'POST',
            url:'/savecaogao',
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
