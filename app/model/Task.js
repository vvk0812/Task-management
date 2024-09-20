var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    Title: {
        type: String,
        required:true
    },
    Description: {
        type: String,
        default: ''
    },
    Completed: {
        type: Boolean,
        default: false
    },
 },
  { timestamps: true });

var Taskdata = new mongoose.model('Task', schema);
module.exports = Taskdata;