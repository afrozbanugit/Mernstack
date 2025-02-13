let mongoose = require("mongoose");
let schema = mongoose.Schema;

const RatingSchema = new schema({rating:{type:Number,required:true,min:1,max:5},
                                productId:String,
                                productName:String,
                                userId:String,
                                comments:String},
                                {versionKey:false}
)

mongoose.connect("mongodb://localhost:27017/testdb");
let RatingModel = mongoose.model("rating",RatingSchema);

module.exports=RatingModel;
