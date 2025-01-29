let express = require("express");
let productRoute = express.Router();
let productDataModel = require("../DataModel/ProductDataModel")

productRoute.post("/api/addProduct",(request,response)=>{
    console.log("Request body received is ",request.body);
   let newProduct= new productDataModel(request.body);
   newProduct.save().then((savedProduct)=>
                    {console.log("saved product ",savedProduct);
                    response.status(201).send(savedProduct);
                    })
                    .catch((error)=>{console.error(error);
                        response.send("Error while saving product to databse",error);
                    })
})

productRoute.get("/api/getAllProducts",async(request,response)=>{
   try{
    let products = await productDataModel.find();
    response.send(products);
   }catch(error){
    console.log("Error while fetching products",error);
    response.send("Error fetching products");
   }
})

module.exports=productRoute;