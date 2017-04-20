/**
 * Created by Administrator on 2017/3/7.
 */

var formidable = require("formidable");
var db = require("../models/db.js");
var md5 = require("../models/md5.js");
var path = require("path");
var fs = require("fs");
var gm = require("gm");

exports.showIndex = function (req, res, next) {
    res.sendfile({
            "login": req.session.login == "1" ? true : false,
            "username": req.session.login == "1" ? req.session.username : "",
            "active": "登陆"
    })
};
exports.showLogin = function (req, res, next) {
    //得到用户填写的东西
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        //得到表单之后做的事情
        var username = fields.username;
        var password = fields.password;


        //查询数据库中是不是有这个人
        db.find("users", {"username": username}, function (err, result) {
            if (err) {
                res.send("-3"); //服务器错误
                return;
            }
            if (result.length != 0) {
                res.send("-1"); //被占用
                return;
            };
            //设置md5加密
            password=md5(password);
            db.insertOne("users", {
                "username": username,
                "password":password,
                "email":"",
                "avatar":"././avatar/2.jpg",
                "phone":""
                /*"phone":""*/
            },function (err, result) {
                if (err) {
                    res.send("-3"); //服务器错误
                    return;
                }
                req.session.login="1";
                req.session.username=username;
            })
            db.insertOne("draft", {
                "username": username,
                "datetime": "",
                "content": "",
                "header":"",
                "avatar":""
            }, function (err, result) {
                if (err) {
                    res.send("-3"); //服务器错误
                    return;
                }
                res.send("1"); //发送成功
            });
            //保存这个人
            console.log(result.length)//注册成功写入session



        });
    });
};
exports.showEnter = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        //得到表单之后做的事情
        var username = fields.username;
        var password = fields.password;
        var jiamiPassword=md5(password);
        db.find("users", {"username": username}, function (err, result) {
            if (err) {
                res.send("-5"); //服务器错误
                return;
            };
            if (result.length == 0) {
                res.send("-1"); //没有该用户
                return;
            };
            if (jiamiPassword==result[0].password) {
                req.session.login='1';
                req.session.username=username;
                db.find("users",{'username':req.session.username},function(err,result){
                    res.json(result);
                });
                 //用户名密码正确
                return
            }else{
                res.send("-2"); //用户名正确,密码错误
                return
            }

        });
    })

};
//发表说说
exports.doPost = function (req, res, next) {
    //必须保证登陆
    if (req.session.login != "1") {
        res.end("非法闯入，这个页面要求登陆！");
        return;
    }
    //用户名
    var username = req.session.username;

    //得到用户填写的东西
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        //得到表单之后做的事情
        var content = fields.content;
        var header=fields.header;
        var datetime=fields.datetime;
        var avatar=fields.avatar;
        //现在可以证明，用户名没有被占用




                db.insertOne("posts", {
                    "username": username,
                    "datetime": datetime,
                    "content": content,
                    "header":header,
                    "avatar":avatar
                }, function (err, result) {
                    if (err) {
                        res.send("-3"); //服务器错误
                        return;
                    }
                    res.send("1"); //发送成功
                });



    });
};
//存入草稿
exports.savecaogao = function (req, res, next) {
    //必须保证登陆
    if (req.session.login != "1") {
        res.end("非法闯入，这个页面要求登陆！");
        return;
    }
    //用户名
    var username = req.session.username;

    //得到用户填写的东西
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

        //得到表单之后做的事情
        var content = fields.content;
        var header=fields.header;
        var datetime=fields.datetime;
        var avatar=fields.avatar;
        //现在可以证明，用户名没有被占用
        db.updateMany("draft", {"username": req.session.username}, {
            $set: {
                "username": req.session.username,
                "datetime": datetime,
                "content": content,
                "header":header,
                "avatar":avatar}
        }, function (err, results) {
            res.send("1");


        });






    });
};
//取出草稿
exports.getdraft = function(req,res,next){
    if( req.session.login=="1"){
        //这个页面接收一个参数，页面
        var page = req.query.page;
        db.find("draft",{'username':req.session.username},{"pageamount":10000,"page":page,"sort":{"datetime":1}},function(err,result){

            res.json(result);
        });
    }else{
        res.send("-1")
    }

};
//保存草稿文章
exports.postdraft = function (req, res, next) {
    //必须保证登陆
    if (req.session.login != "1") {
        res.end("非法闯入，这个页面要求登陆！");
        return;
    }
    //用户名
    var username = req.session.username;

    //得到用户填写的东西
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        //得到表单之后做的事情
        var content = fields.content;
        var header=fields.header;
        var datetime=fields.datetime;
        var avatar=fields.avatar;
        //现在可以证明，用户名没有被占用




        db.insertOne("posts", {
            "username": username,
            "datetime": datetime,
            "content": content,
            "header":header,
            "avatar":avatar
        }, function (err, result) {
            db.updateMany("draft", {"username": req.session.username}, {
                $set: {
                    "datetime": "",
                    "content": "",
                    "header":"",
                    "avatar":""}
            }, function (err, results) {
                res.send("1");


            });

        });



    });
};
//清空草稿
exports.emportyDraft=function(){
    db.updateMany("draft", {"username": req.session.username}, {
        $set: {
            "datetime": "",
            "content": "",
            "header":"",
            "avatar":""}
    }, function (err, results) {
        res.send("1");


    });
}
//列出所有说说，有分页功能
exports.getAll = function(req,res,next){
    //这个页面接收一个参数，页面
    var page = req.query.page;
    db.find("posts",{},{"pageamount":10000,"page":page,"sort":{"datetime":1}},function(err,result){
        res.json(result);
    });
};//列出我的说说，有分页功能
exports.getMyArtical = function(req,res,next){
    if( req.session.login=="1"){
        //这个页面接收一个参数，页面
        var page = req.query.page;
        db.find("posts",{'username':req.session.username},{"pageamount":10000,"page":page,"sort":{"datetime":1}},function(err,result){
            res.json(result);
        });
    }else{
        res.send("-1")
    }

};
exports.getUserData = function(req,res,next){
    //这个页面接收一个参数，页面
    if( req.session.login=="1"){
        res.send(req.session.username)
    }else{
        res.send("-1")
    }
};
exports.getLogout = function(req,res,next){
    req.session.login='';
    req.session.username='';
    res.send("1")
};

//设置头像
exports.getMyData = function (req, res, next) {
    //必须保证登陆
    if (req.session.login != "1") {
        res.end("非法闯入，这个页面要求登陆！");
        return;
    }

    var form = new formidable.IncomingForm();
    form.uploadDir = path.normalize(__dirname + "/../avatar");
    form.parse(req, function (err, fields, files) {
        console.log(files);
        console.log(fields)
        //得到表单之后做的事情
        var phone = fields.phone;
        var password = fields.password;
        var email=fields.email
        if(typeof files.file=="undefined"&&password.length==0){
            console.log(4)
            //更改数据库当前用户的avatar这个值
            db.updateMany("users", {"username": req.session.username}, {
                $set: {"email":email,"phone":phone}
            }, function (err, results) {
                res.send("1");
            });

        }else if(typeof files.file=="undefined"&&password.length!=0){
            console.log(3)
            password=md5(password);
            //更改数据库当前用户的avatar这个值
            db.updateMany("users", {"username": req.session.username}, {
                $set: {"password":password,"email":email,"phone":phone}
            }, function (err, results) {
                res.send("1");
            });
        }else if(typeof files.file!="undefined"&&password.length==0){
            console.log(2)
            var oldpath = files.file.path;
            var newpath = path.normalize(__dirname + "/../avatar") + "/" + req.session.username + ".jpg";

            fs.rename(oldpath, newpath, function (err) {
                if (err) {
                    res.send("失败");
                    return;
                }
                var avatar1 = "././avatar/"+req.session.username + ".jpg";
                //更改数据库当前用户的avatar这个值
                console.log( req.session.avatar)
                db.updateMany("users", {"username": req.session.username}, {
                    $set: {"avatar":avatar1 ,"email":email,"phone":phone}
                }, function (err, results) {
                    res.send("1");


                });
            });




        }else {
            console.log(1)
            //更改数据库当前用户的avatar这个值
            password = md5(password);
            var oldpath = files.file.path;
            var newpath = path.normalize(__dirname + "/../avatar") + "/" + req.session.username + ".jpg";
            fs.rename(oldpath, newpath, function (err) {
                if (err) {
                    res.send("失败");
                    return;
                }
                var avatar1 = "././avatar/" + req.session.username + ".jpg";
                console.log(typeof  avatar1)
                console.log(avatar1)
                //更改数据库当前用户的avatar这个值
                db.updateMany("users", {"username": req.session.username}, {
                    $set: {"password": password, "avatar": avatar1, "email": email, "phone": phone}
                }, function (err, results) {
                    res.send("1");
                });
            });


        }

    });
}
exports.delItem=function(req, res, next){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(fields)
        var username = fields.username;
        var datetime = fields.datetime;
        var content=fields.content
        var header=fields.header
        var avatar=fields.avatar
        //得到表单之后做的事情
        db.deleteMany("posts", {
            "username": username,
            "datetime": datetime,
            "content": content,
            "header":header,
            "avatar":avatar
        }, function (err, result) {
            if (err) {
                res.send("-5"); //服务器错误
                return;
            };
            db.insertOne("rubbsh", {
                "username": username,
                "datetime": datetime,
                "content": content,
                "header":header,
                "avatar":avatar
            }, function (err, result) {
                if (err) {
                    res.send("-3"); //服务器错误
                    return;
                }
                res.send("1"); //发送成功
            });


        });
    })

};
exports.dustbin = function(req,res,next){
    if( req.session.login=="1"){
        //这个页面接收一个参数，页面
        var page = req.query.page;
        db.find("rubbsh",{'username':req.session.username},{"pageamount":10000,"page":page,"sort":{"datetime":1}},function(err,result){
            res.json(result);
        });
    }else{
        res.send("-1")
    }

};

//恢复删除]
exports.huifu = function (req, res, next) {
    //必须保证登陆
    if (req.session.login != "1") {
        res.end("非法闯入，这个页面要求登陆！");
        return;
    }


    //得到用户填写的东西


        if (!req.body){
            return res.sendStatus(400)
        }


        console.log(req.body)
        var newArr=req.body.attr


        //现在可以证明，用户名没有被占用
        console.log(newArr);
        console.log(newArr.length);
       console.log(newArr[0]);

         for(var i=0;i<newArr.length;i++){



              db.insertOne("posts",newArr[i] , function (err, result) {
                  if (err) {
                      res.send("-3"); //服务器错误
                      return;
                  }

                  db.deleteMany("rubbsh", newArr[i], function (err, result) {
                      if (err) {
                          res.send("-5"); //服务器错误
                          return;
                      }

              })

             });
          }
    res.send("1"); //发送成功

};
//清空垃圾箱
exports.emporty=function(){
    db.deleteMany("rubbsh",{}, function (err, result) {
        if (err) {
            res.send("-5"); //服务器错误
            return;
        }
    })
}





