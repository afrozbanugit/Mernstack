let express = require('express');
let orderRoute = express.Router();
let OrdersDataModel = require('../DataModel/OrdersDataModel')

orderRoute.get("/api/allorders",async (req,res)=>{
    try{
        let orderList = await OrdersDataModel.find();
    console.log("Order list" , orderList);
    res.status(200).send(orderList);
    }catch(error){
        console.error("Error while fetching orders from db ",error);
        res.statusCode(500).send("Unable to retrieve orders ", error);
    }
})

orderRoute.get("/api/order/:userId",async (req,res)=>{
    console.log("Fetch order for user id ", req.params.userId);
    try{
        let orderList = await OrdersDataModel.find({userId:req.params.userId});
    //    console.log("Number of Orders for this user" , orderList);
        res.status(200).send(orderList);
    }catch(error){
        console.error("Error while fetching orders from db ",error);
        res.sendStatus(500);
    }
})

orderRoute.post("/api/new/:userId",async (req,res)=>{
    let newOrder = new OrdersDataModel(req.body);
    let response = await newOrder.save();    
    console.log("Response ", response);
    res.status(200).send(response);
})

orderRoute.post("/api/cancel/:userId/:orderId",async(req,res)=>{
    const {userId,orderId} = req.params;
    console.log("Order Id to be deleted ", orderId);
    console.log("for the user ",userId);

    OrdersDataModel.findOne({_id:orderId})
                    .then((order)=>{
                        if(order){
                            console.log("order with id found ", orderId);
                            order.isCancelled=true;
                            order.status="Cancelled";
                            order.save();
                            res.status(200).send(order);
                        }else{
                            console.log("Order Id not found");
                            res.status("NOT FOUND").send();                            
                        }                        
                    })
                    .catch((error)=>{
                        console.error("Error while fetching Order from DB ", error);
                        res.status(500).send();
                    })
    
    /* OrdersDataModel.findByIdAndDelete(orderId)
                    .then((deletedOrder)=>{
                        if(deletedOrder)
                        {
                            console.log("Deleted order ",deletedOrder);
                            res.send(deletedOrder);
                                                    }
                        else{
                            console.log("Order not found");
                            res.sendStatus(404);
                        }})
                    .catch((error)=>console.log("Error while deleteting order ",error)); */
    //console.log(deletedOrder);
    
})

orderRoute.post("/api/reorder/:userId/:orderId",async(req,res)=>{
    const {userId,orderId} = req.params;
    console.log("Again add order to list ", orderId);

    OrdersDataModel.findOne({_id:orderId})
                    .then((order)=>{
                        if(order){
                            console.log("order with id found ", orderId);
                            order.isCancelled=false;
                            order.status='Re-Ordered';
                            order.date=new Date();
                            order.save();
                            res.status(200).send(order);
                        }else{
                            console.log("Order Id not found");
                            res.status("NOT FOUND").send();                            
                        }                        
                    })
                    .catch((error)=>{
                        console.error("Error while fetching Order from DB ", error);
                        res.status(500).send();
                    })
})

module.exports=orderRoute;