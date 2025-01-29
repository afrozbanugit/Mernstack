let express = require("express");
const ReviewRoute = express.Router();
const RatingDataModel = require("../DataModel/RatingDataModel");

ReviewRoute.post("/api/new",(req,res)=>{
    console.log("Review request body ",req.body);
    RatingDataModel.find({userId:req.body.userId,
                          productId:req.body.productId  
                         })
                .then((response)=>{
                    console.log("User reviewed this product already");
                })
    
})
