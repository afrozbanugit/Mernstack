import React,{useEffect, useState} from "react";
import ProductDetails from "./Order-ProductDetail";
import {useDispatch, useSelector} from "react-redux";
import { CancelOrder,ReOrder,ChangeOrderStatus } from "../../state/orders/OrderAction";
import Button from 'react-bootstrap/Button';

const OrderItem =(props)=>{

    const user = useSelector(store=>store.userReducer.user);
    const dispatcher =useDispatch();
    let [toggle,setToggle] = useState(false);
    let [datediff,setdatediff] = useState(0);
    const [status,setStatus] =useState("");
    const dateString = props.order.date;
    const orderStatus = props.order.status;
    const date = new Date(dateString);
            // Format the date
    const formattedDate = date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
        });
    const orderId = props.order._id;
    const cancelledOrder = props.order.isCancelled;
    const total = props.order.total;
    const products = props.order.products;  
    const userId = user._id;

    useEffect(()=>{
        // Calculate the difference in milliseconds
        const diffInMilliseconds = Math.abs(date.getTime() - new Date());
        // Convert to days
        datediff = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
     //   console.log("datediff ",datediff);
        setdatediff(datediff);
        if(datediff >2 && (orderStatus=='Re-Ordered' || orderStatus =='In-Progress')){
            let newstatus ="Delivered";
            dispatcher(ChangeOrderStatus(orderId,newstatus))
            
        }
    },[])

    let onCancelOrder = (userId,orderId)=>{
      //  console.log("Cancel order ", orderId);
        dispatcher(CancelOrder(userId,orderId));
    }

    let onReOrder =(userId,orderId)=>{
        console.log("Re order ", orderId);
        dispatcher(ReOrder(userId,orderId));
    }

    return(<>    
        <div>
            <div style={{fontSize:"medium", fontSize:"bold"}}>Order Date : {formattedDate}</div>
            {/* <div style={{fontSize:"medium"}}>Amount : {total}</div> */}
            <div style={{fontSize:"small"}}># {orderId}</div>
            {cancelledOrder ? 
                <div> 
                    <div>Status : {orderStatus}</div>                   
                    <Button variant="outline-dark" size="sm" onClick={()=>{onReOrder(userId,orderId)}}>
                    ReOrder</Button>
                </div>
            : 
            <>
                {(datediff >2 && props.order.status!='In-Progress') || (datediff >10 && props.order.status!='Re-Ordered')? 
                    <>
                    <div>Status: {orderStatus}</div>                     
                    <Button variant="outline-dark" size="sm" onClick={()=>{onReOrder(userId,orderId)}}>
                    ReOrder</Button>
                    </>
                :
                <>
                    <div>Status: {orderStatus}</div>
                    <Button variant="outline-dark" size="sm" onClick={()=>{onCancelOrder(userId,orderId)}}>
                        Cancel Order</Button>                
                </>
                }
            </>}
            <div>{products && products.length >0 ? <>
                <div style={{display:"flex",flexWrap:"wrap",margin:"5px",padding:"5px"}}>
                {products.map((product)=>{
                    return(
                    <div key={product._id} style={{padding:"5px"}}>
                        <img className="prodDetailImage" onClick={()=>setToggle(!toggle)} src={require('../Product/shopping_Cart.jpg')} /> 
                            {toggle ? 
                       <ProductDetails product={product} status={orderStatus} user={user}/> : " "}    
                       </div>                                       
                    )
                })}
                </div>
            </>: " "}</div>
        </div>

    </>)
}

export default OrderItem;