let mongoose = require("mongoose");

let SchemaObj = mongoose.Schema;
let userSchema = new SchemaObj({
    userName : {type: String, required : true},
    password: {type:String, required : true},
    street: String,
    mobile: Number,
    email: String,
    hobby: String
},
{
    versionKey: false //false - set to false then it wont create in mongodb, don't set it to true, if you want _v just dont add this
}
)
mongoose.connect("mongodb://localhost:27017/testdb");
let UserModel = mongoose.model("user",userSchema); //user - collection name, pluralised by mongodb



module.exports=UserModel;