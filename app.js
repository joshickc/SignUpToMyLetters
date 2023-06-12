const express = require("express");
const bodyParser= require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html");
    console.log("website open");
});

app.post("/", function(req, res){
    console.log("reached post");
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    console.log(req.body.email);
    res.sendFile(__dirname + "/success.html");

});

app.listen(3000, function () {
    console.log("server is running");
});
