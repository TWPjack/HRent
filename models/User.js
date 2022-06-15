var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var User = new Schema({
	name: { type: String },
	phone: { type: String },
    email: { type: String }
});

module.exports = mongoose.model('User', User);