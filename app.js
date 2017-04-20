var express=require("express")
var app=express();
var router = require("./router/router.js");

var session = require('express-session');
var bodyParser = require('body-parser');
//使用session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
var jsonParser = bodyParser.json();
//模板引擎
app.set("view engine","ejs");
//静态页面
app.use(express.static("./public"));
app.use("/avatar",express.static("./avatar"));
app.get("/",router.showIndex);
app.post("/digest",router.showLogin);
app.post("/enter",router.showEnter);
app.post("/postData",router.doPost);
app.post("/savecaogao",router.savecaogao);
app.post("/getdraft",router.getdraft);
app.post("/postdraft",router.postdraft);
app.get("/getData",router.getAll);
app.get("/getUser",router.getUserData);
app.get("/logout",router.getLogout);
app.post("/getMyArtical",router.getMyArtical);
app.post("/getMyData",router.getMyData);
app.post("/delItem",router.delItem);
app.get("/dustbin",router.dustbin);
app.get("/emporty",router.emporty);
app.get("/emportyDraft",router.emportyDraft);
app.post('/huifu', jsonParser,router.huifu )
app.listen(3000)