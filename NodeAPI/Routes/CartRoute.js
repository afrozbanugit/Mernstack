let express = require('express');
let cartRoute = express.Router();
let cartModel = require('../DataModel/CartDataModel')

cartRoute.post("/api/savecart",async (req,res)=>{
    console.log(req.body);
    let {cartList,userId} = req.body;
    let cartObj = await cartModel.findOne({userId:req.body.userId})
    if(cartObj){
        console.log("User with cart already present",cartObj);
        console.log("cartList received through req.body" , cartList);
        cartObj.cart = cartList; //replacing db cart with cart that user has sent from cartcomponent page
        cartObj.save().then((success)=>console.log("Successfully cart updated"))
                    .catch(error=>console.error("Error while saving cart to db"));
        }else{
        console.log("User with cart not in db. Add cart items");
        let newCartObj = new cartModel({userId,cart:cartList});
        console.log("New Cart-> ",newCartObj);
        newCartObj.save()
        .then((response)=>console.log(response))
        .catch(error=>console.error("Error while saving cart to db"));
    }

    res.send("OK");
})

cartRoute.post("/api/getall",(req,res)=>{
    console.log(req.body.userId);
    cartModel.find({userId:req.body.userId})
            .then((data)=>{
                console.log("Fetched data from DB",data);
                res.status(200).json(data)})
            .catch(error=>res.status(500).send(error));
})

module.exports=cartRoute;