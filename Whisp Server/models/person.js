
var restful = require('node-restful');
var mongoose = restful.mongoose;

var ProductSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String
});

module.exports = restful.model('Person', ProductSchema);
