(function(){
  var mongoose = require("mongoose");
  var Schema = mongoose.Schema;

  var DemoModel = new Schema({
    name: {
      type: String,
      required:true
    },
    description: {
      type: String,
      required: true
    }, 
    timestamp: {
      type: Date,
      default: Date.now()
    }
  });

  module.exports = mongoose.model("DemoModel", DemoModel);
})();