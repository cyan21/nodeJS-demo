var express = require('express');
var app = express();
var fs = require("fs");
var cotd = require("content-of-the-day"),
    mycontent = cotd.get;

app.get('/getcontent', function (req, res) {
       console.log( mycontent() );
       res.end( mycontent() );
})

app.use(express.static('public'));

app.get('/listUsers2', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
  });
})

app.get('/:id', function (req, res) {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    var users = JSON.parse( data );
    var user = users["user" + req.params.id] 
    console.log( user );
    res.end( JSON.stringify(user));
  });
})


var server = app.listen(8081, function () {

//  var host = server.address().address
  var host = "http://192.168.21.23" 
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
