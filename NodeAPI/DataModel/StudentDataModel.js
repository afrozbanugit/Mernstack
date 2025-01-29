let mongooseInstance = require("mongoose")
let Schema = mongooseInstance.Schema;

let StudentSchema = new Schema({name:{type:String,required:true},
                                 age:Number,
                                 department:String,
                                 graduated:Boolean},
                                {
                                    versionKey: false //false - set to false then it wont create in mongodb, don't set it to true, if you want _v just dont add this
                                })
mongooseInstance.connect("mongodb://localhost:27017/testdb");

let studentDataModel = mongooseInstance.model("student",StudentSchema);

module.exports=studentDataModel;