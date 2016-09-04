(function(){
  var DemoModel = require("../models/demo.model");

  exports.getAllDemos = getAllDemos;

  function getAllDemos(req, res) {
    DemoModel.find(function(err, demo){
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(demo);
    })
  }
})()
