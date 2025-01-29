let mongoose = require('mongoose');
let schema = mongoose.Schema;

let CartSchema = new schema(
    { userId: {type:String,required:true}, cart : Object},
    { versionKey: false }    
 )

 let CartModel = mongoose.model("cart",CartSchema);

module.exports=CartModel;