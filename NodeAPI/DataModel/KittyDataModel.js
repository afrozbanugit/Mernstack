const mongooseobj = require("mongoose");
let Schema = mongooseobj.Schema;
mongooseobj.connect("mongodb://localhost/testdb");
let KittySchema = new Schema({
    name:String
})

let KittyModel = mongooseobj.model("Kitty",KittySchema);

module.exports=KittyModel;