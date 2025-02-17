import axios from "../../config/axiosConfiguration";
import * as ActionType from "../ActionTypes"
import {RemoveCartListInDB} from "../cart/CartAction"
import { AddNewNotification } from "../Notification/NotificationAction";


export const SaveOrderToDB =(newOrder)=>{
return( async function(dispatcher){
    try{
        let response = await axios.post("http://localhost:9000/order/api/new/" +newOrder.userId,newOrder);
        console.log("New order placed ",response.data);
        dispatcher(FetchOrdersFromDB(newOrder.userId));
        dispatcher(RemoveCartListInDB(newOrder.userId));
    }catch(err){
        console.log(err);
    }
})
}

export const AddOrderlisttoStore =(recentorders)=>{
    return{
        type:ActionType.ADD_ORDERLIST_TO_STORE,
        payload:{recentorders}
    }
}

export const CancelOrder =(userId,orderId)=>{
    return(async(dispatcher)=>{
      let cancelledOrder =  await axios.post("http://localhost:9000/order/api/cancel/" +userId +"/" + orderId);
      console.log("Cancelled order ", cancelledOrder.data);
        dispatcher(UpdateOrderInStore(cancelledOrder.data));
        dispatcher(AddNewNotification({message:"Order with Id " + cancelledOrder.data._id + " is Cancelled",count:0}))
    })
}

export const ReOrder =(userId,orderId)=>{
    return(async(dispatcher)=>{
      let reOrder =  await axios.post("http://localhost:9000/order/api/reorder/" +userId +"/" + orderId);
      console.log("Re order ", reOrder.data);   
        dispatcher(UpdateOrderInStore(reOrder.data));
    })
}

export const RemoveOrderInStore=(orderId)=>{
    return({
        type:ActionType.REMOVE_ORDER_IN_STORE,
        payload:{orderId}
    })
}

export const FetchOrdersFromDB =(userId)=>{

    return(async function(dispatcher){
       const orderlist= await axios.get("http://localhost:9000/order/api/order/" + userId);
       console.log("Fetching recent orders for the user ", orderlist.data);
       dispatcher(AddOrderlisttoStore(orderlist.data));
    })

}

export const UpdateOrderInStore =(updatedOrder)=>{
    return({
        type:ActionType.UPDATE_ORDER_IN_STORE,
        payload:{updatedOrder}
    })
}

export const ChangeOrderStatus=(orderId,status)=>{
    return (async (dispatcher)=>{
       let response= await axios.post("http://localhost:9000/order/api/changestatus/" + orderId  +"/"+ status);
       console.log("Status changed ", response.data);
       dispatcher(UpdateOrderInStore(response.data));
    })
}