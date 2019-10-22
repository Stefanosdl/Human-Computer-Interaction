var mongoose = require("mongoose");


var DistributionPointSchema = new mongoose.Schema({
    county:{type:String,sparse:true},
    city:{type:String,sparse:true},
    zip:{type:String,sparse:true},
    address:{type:String,sparse:true}
});

module.exports = mongoose.model('DistributionPoint',DistributionPointSchema);
