let mongoose = require("mongoose");
const Schema = mongoose.Schema;

let hobbySchema = new Schema({Hobby: String},{versionKey:false});

mongoose.connect("mongodb://localhost:27017/testdb");

let HobbyDataModel = mongoose.model("hobby",hobbySchema);

module.exports=HobbyDataModel;