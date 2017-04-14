var express = require("express");
var path = require("path");
var PORT = process.env.PORT || "3000";
var app = express();

app.get("/", function(req, res){
  res.redirect("/api/whoami");
});

app.get("/api/whoami", function(req, res){
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  var operatingSystem = req.headers["user-agent"].substring((req.headers["user-agent"].indexOf("(") + 1), req.headers["user-agent"].indexOf(")"));
  var language = req.headers["accept-language"].slice(0,req.headers["accept-language"].indexOf(","));
  res.json({
    ipaddress: ip,
    software: operatingSystem,
    language: language
  });
});

app.listen(PORT, function(){
  console.log("Listening on port "+ PORT);
});
