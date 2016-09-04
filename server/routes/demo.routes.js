(function(){
  var express = require("express");
  var router = express.Router();
  var demoController = require("../controllers/demo.controller");

  router.get('/demo', demoController.getAllDemos);

  module.exports = router;
})()