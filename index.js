(function() {
  var express = require("express");
  var bodyParser = require("body-parser");
  var cors = require("cors");
  var morgan = require("morgan");
  var config = require("config");
  var mongoose = require("mongoose");
  var demoRouter = require("./server/routes/demo.routes");


  mongoose.connect(config.dbUrl);

  var app = express();

  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.use(express.static(__dirname + '/public'))

  app.use('/', demoRouter);


  app.listen(config.port, function(){
    console.log("listening on "+ config.port);
  });

  module.exports = app;
})()
