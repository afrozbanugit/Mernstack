let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    products:Object,
    userId:{type:String,require:true},
    date:Date,
    total:Number,
    isCancelled:{type:Boolean,default:false},
    status:{type:String,default:'In-Progress'}},
    { versionKey: false })

mongoose.connect("mongodb://localhost:27017/testdb");

const OrdersDataModel = mongoose.model("order",OrdersSchema);

module.exports=OrdersDataModel;