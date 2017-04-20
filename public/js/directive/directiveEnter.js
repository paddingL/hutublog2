/**
 * Created by Administrator on 2017/3/5.
 */
hutuBlog.directive('directiveEnter',function($http){
    return{
        restrict:'EA',
        repalce:true,
        templateUrl:'././view/directiveEnter.html',
        scope:{
            userState:"="
        },
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
                    url:'/enter',
                    data:self,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function ( data ) {
                        return $.param(data);
                    }
                }).success(function(data){
                    console.log(data)
                    if(typeof data[0]=="object"){
                        scope.userState=data[0]
                        console.log(scope.userState)
                        //注册成功
                        alert("登陆成功")
                    }else if(data=="-1"){
                        //注册失败
                        alert("账户名或密码错误")
                    }else if(data=="-5"){
                        //服务器错误
                    }else if(data=="-2"){
                        alert("密码错误")
                    }

                })

            }
        }
    }
})
