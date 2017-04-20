/**
 * Created by Administrator on 2017/3/5.
 */
hutuBlog.directive('atricalContent',function($http){
    return {
        restrict: 'EA',
        repalce: true,
        templateUrl: '././view/atricalContent.html',
        scope: {

        },
        link: function (scope, ele, attr) {

               /* scope.header = scope.datas.header;
                scope.content = scope.datas.content;*/


        }
    }
})
