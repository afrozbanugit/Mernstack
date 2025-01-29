import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchOrdersFromDB } from "../../state/orders/OrderAction";
import OrderItem from "./OrderItem";

let RecentOrdersComponent =(props)=>{
const recentorders = useSelector(store=>store.OrderReducer.recentorders)
const user = useSelector(store => store.userReducer.user);
const dispatcher = useDispatch();

useEffect(()=>{       
    console.log("Recent order of this user ",recentorders); 
    recentorders && recentorders.length <1 ? 
        dispatcher(FetchOrdersFromDB(user._id))    
    : " "
    recentorders && recentorders.length > 0 ? 
    recentorders.sort((a,b)=>new Date(b.date) - new Date(a.date)) : console.log("Recent orders list is still empty")
},[])
    return(<>
    {
        recentorders && recentorders.length > 0 ?
        <>
        
        <div>Recent Orders for you</div>
        {       
        recentorders.map((order)=>{
          //  console.log(order);
         return(
              
            <div key={order._id}>   
            <br></br>       
                <div className="orderItems" >
                    <OrderItem order={order}/>
                </div>
            </div>  
             )
        })}
        </>
        :
        <div>No recent orders for this user</div>
    }
       
        
    </>)
}

export default RecentOrdersComponent;