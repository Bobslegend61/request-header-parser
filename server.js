var express = require("express");
var path = require("path");
var PORT = process.env.PORT || "3000";
var app = express();

app.get("/", function(req, res){
  res.redirect("/api/whoami");
});

app.get("/api/whoami", function(req, res){
  res.json({check: req.connection.remoteAddress});
});

app.listen(PORT, function(){
  console.log("Listening on port "+ PORT);
});
