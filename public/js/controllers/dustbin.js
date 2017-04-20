/**
 * Created by Administrator on 2017/3/13.
 */
/**
 * Created by Administrator on 2017/3/13.
 */
hutuBlog.controller('dustbin',function($scope,$http) {
    $http({
        method: 'GET',
        url: '/dustbin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

    }).success(function (data) {
        $scope.data=data
        var dLength= $scope.data.length
        for(var i=0;i<dLength;i++){
            $scope.data[i].ishuifu=false;
        }
    });
    $scope.showBtn=false;
    var watch = $scope.$watch('data',function(newValue,oldValue, scope){
        if(oldValue!=newValue){
            if(newValue.length>0){
               $scope.showBtn=true;
            }else{
                $scope.showBtn=false;
            }

        };


    });
    $scope.selectHuifu=function(item){
        if(item.ishuifu==false){
            item.ishuifu=true;
        }else{
            item.ishuifu=false;
        }
    }
   function getHuifu(){
        var newHuifuDataArr=[];
        for(var i=0;i<$scope.data.length;i++){
            if($scope.data[i].ishuifu==true){
                newHuifuDataArr.push($scope.data[i]);
                $scope.data.splice(i,1);
                i--;
            }
        }
        return newHuifuDataArr
    };

    $scope.huifuData=function(){
        var newHuifuDataArr=getHuifu();
        for(var i=0;i<newHuifuDataArr.length;i++){
            delete newHuifuDataArr[i]._id;
            delete newHuifuDataArr[i].ishuifu;
            delete newHuifuDataArr[i].$$hashKey;
        }
        var newHuifuDataObj={
            "attr":newHuifuDataArr
        }

        $http({
            method:'POST',
            url:'/huifu',
            data:newHuifuDataObj,
            traditional:true,
            headers: {
                'Content-Type': 'application/json'
            }

        }).success(function(data){

                alert(data)

        })
    }
    $scope.emporty=function(){
        $scope.data=null;
        $scope.showBtn=false
        $http({
            method: 'GET',
            url: '/emporty',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        }).success(function (data) {

        });
    }

})


