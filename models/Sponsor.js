var mongoose = require('mongoose');
var Blocks = new mongoose.Schema({}, { strict: false });
module.exports= mongoose.model('Sponsor', Blocks);