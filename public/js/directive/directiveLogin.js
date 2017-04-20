/**
 * Created by Administrator on 2017/3/5.
 */
hutuBlog.directive('directiveLogin',function($http){
        return{
            restrict:'EA',
            repalce:true,
            templateUrl:'././view/directiveLogin.html',
            scope:true,
            link:function(scope,ele,attr){
                scope.username="";
                scope.password=""


                scope.getLoginData=function(){
                    var self={
                        "username" : scope.username,
                        "password" : scope.password
                    }
                    console.log(self)
                   /* $.post("/digest",{
                        "username" : $("#username").val(),
                        "password" : $("#password").val()
                    }*/
                        $http({
                            method:'POST',
                            url:'/digest',
                            data:self,
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            transformRequest: function ( data ) {
                                return $.param(data);
                            }
                        }).success(function(data){
                        if(data=="1"){
                            //注册成功
                            alert("注册成功")
                        }else if(data=="-1"){
                            //注册失败
                            alert("用户名被占用")
                        }else if(data=="-3"){
                            //服务器错误
                        }
                           console.log(data)
                    })
                    scope.username="";
                    scope.password=""
                }
            }
        }
    })
