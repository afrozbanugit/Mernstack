let express = require("express");
const ReviewRoute = express.Router();
const RatingDataModel = require("../DataModel/RatingDataModel");
const ProductDataModel = require("../DataModel/ProductDataModel")

ReviewRoute.post("/api/review",async (req,res)=>{
    console.log("Review request body ",req.body);  
   const {rating,productId,userId,productName,comments} = req.body.ratingdata; 
   let ratingObj = await RatingDataModel.findOne({userId:req.body.ratingdata.userId,
                                        productId:req.body.ratingdata.productId});
    if(ratingObj){
        console.log("Rating for this product already exists--so override " , ratingObj.productName);
        ratingObj.rating=rating;
        ratingObj.comments=comments;
        ratingObj.save()
                .then((response)=>{
                    console.log("Review obj updated ", response)
                    UpdateProductRating(productId,response.rating);
                    res.send(response)})
                .catch((error)=>{console.error("Error while updating review",error)})

    }else{
        console.log("New rating for this product ", productName);
       let reviewobj = new RatingDataModel(req.body.ratingdata);
       reviewobj.save().then(response => {
        console.log(response);
        UpdateProductRating(productId,response.rating)
        res.send(response);
       })
       .catch(error => {console.error("Error while saving")})
    }            
    
})

ReviewRoute.post("/api/getAvgRating/:productId",async (req,res)=>{
    console.log("Req params ",req.params);
    console.log("Get average rating for product ",req.params.productId);  
   const {productId} = req.params; 
   let allreviews = await RatingDataModel.find({productId:productId});
   console.log(allreviews.length ); 
   if(allreviews.length !=0){
        const ratingsArray=[];
        allreviews.forEach((review)=>{
            ratingsArray.push(review.rating);
        })     
        console.log("Ratings Array", ratingsArray)
        
        const sum =ratingsArray.reduce((prev,current)=>{
            return prev+=current
        },0);
        let avgRating = sum/ratingsArray.length;
        let ProductObj = await ProductDataModel.findOne({_id:productId})
        ProductObj.rating=avgRating;
        console.log("Product obj ",ProductObj);
        ProductObj.save().then((response)=>{console.log("Product rating updated ",response)})
                           .catch((error)=>console.error("error while updating product rating",error)) 
        res.send({rating:avgRating})
   } else{
    console.log("No reviews for this product yet");
    res.send({rating:0});
   }
    
})

const UpdateProductRating=async (productId,rating)=>{
    let allreviews = await RatingDataModel.find({productId:productId});
    console.log(allreviews.length ); 
    if(allreviews.length !=0){
        const ratingsArray=[];
            allreviews.forEach((review)=>{
                ratingsArray.push(review.rating);
            })     
        console.log("Ratings Array", ratingsArray)
        
        const sum =ratingsArray.reduce((prev,current)=>{
            return prev+=current
        },0);
        let avgRating = sum/ratingsArray.length;
        let ProductObj = await ProductDataModel.findOne({_id:productId})
        ProductObj.rating=avgRating;
        console.log("Product obj ",ProductObj);
        ProductObj.save().then((response)=>{console.log("Product rating updated ",response)})
                           .catch((error)=>console.error("error while updating product rating",error)) 
        //res.send({rating:avgRating})
   } else{
    console.log("No reviews for this product yet");
    //res.send({rating:0});
   }
}

module.exports=ReviewRoute;
