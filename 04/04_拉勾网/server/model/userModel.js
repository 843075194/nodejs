var mongoose = require("../config/index");

var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {required: true, type: String},
	password: {required: true, type: String}
});

var userModel = mongoose.model("user", userSchema);


var findOne =  function(obj) {
	return userModel.findOne(obj);
}

var insertMany =  function(obj) {
	return userModel.insertMany(obj);
}


module.exports = {
	findOne, insertMany
}