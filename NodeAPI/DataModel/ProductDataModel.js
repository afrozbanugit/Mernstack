let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ProductSchema =new Schema({prodName:{type:String,required:true},
                    price:{type:Number,required:true},
                    description:String,
                    rating:Number,
                    quantity: {type: Number, default:1}},
                    {
                        versionKey: false //false - set to false then it wont create in mongodb, don't set it to true, if you want _v just dont add this
                    });
mongoose.connect("mongodb://localhost:27017/testdb")

let ProductModel = mongoose.model("product",ProductSchema);

module.exports= ProductModel;

