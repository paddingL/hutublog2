/**
 * Created by Administrator on 2017/3/5.
 */
hutuBlog.controller('myController',function($scope,$http){
window.onload=function(){
    window.location.hash="/";
}
    var menuHeight = $(window).height() - $("header").height();
    $(".section-menu").css("height", menuHeight);
    $(".section-content").css("height", menuHeight);
    $(".section-menu-content").on("click","li",function(){

        $(".section-menu-content li").removeClass("active");
        $(this).addClass("active")
    })

    $scope.userState= ""
    /*console.log( $scope.userState);


        while( $scope.userState.length!=0){

        }*/
    $scope.isShow=false;
    var watch = $scope.$watch('userState',function(newValue,oldValue, scope){
        if(oldValue!=newValue&& newValue.length!=0){
            $scope.isShow=true;
            $scope.welcome=newValue.username+"，欢迎您";

            if(newValue.avata==""){
                $scope.avatar="././avatar/2.jpg";
            }else{
                $scope.avatar=newValue.avatar;
            }
        };


    });

    $scope.$on('sendParent',function(event,data){//监听在子控制器中定义的 sendParent 事件
                     console.log(data,event.name,event);//事件名称：sendParent
                     $scope.postAtricalContent=data
                 });

    $scope.logout=function(){
        $http({
            method:'GET',
            url:'/logout',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        }).success(function(data){
            if(data=="1"){
                $scope.userState="";
                $scope.isShow=false;

                $scope.postAtricalContent=null;
            }

        })
    };
/*   $scope.getUserName= function(){

        $http({
            method:'GET',
            url:'/getUser',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        }).success(function(data){
            $scope.username=data;
            console.log( $scope.username)
        })
    }*/
})
