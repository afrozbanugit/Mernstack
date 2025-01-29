import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
import {SaveCartToDB,fetchCartItems} from "../../state/cart/CartAction"
import CartSummary from "./CartSummary";

let CartComponent =(props)=>{

    let cartList = useSelector(store => store.CartReducer);
    let user = useSelector((store) => {return store.userReducer.user});
    let couponCode = useSelector((store)=> store.CouponReducer.couponCode);
    let dispatcher = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(user._id){
            console.log("Dispatch fetchCartItems from DB");
            cartList && cartList.length == 0?           
            dispatcher(fetchCartItems(user._id))
            :[]
            }
    },[])
    

    console.log("Cartlist in Cart Component ", cartList);
    console.log("Coupon code received from store ", couponCode);
    let calculateSummary =(cartItems)=>{
        let totalAmount =0;
        let numberOfQuantity =0;
        cartItems.forEach(item => {
            numberOfQuantity += parseInt(item.quantity);
            totalAmount += item.quantity * item.price;
        });
        return {count:numberOfQuantity, totalAmount}
    }
    let userId = user._id;
    const onSaveCart = (cartList)=>{
        
        console.log("userId ", userId);
        if(userId){
           // alert("User logged in");
            dispatcher(SaveCartToDB(cartList,userId));
        }else{
            alert("Please Login in to save and checkout cart");
        }
    }

    return(<>
    {userId && cartList && cartList.length > 0 ?
    <div>
        <table>
                <th>Product</th>
                <th>Price </th>
                {
                    props.readOnly ? "" :
                    <>
                    <th>Description</th>
                    <th>Rating</th>
                    </>
                }
                <th>Quantity</th>
                <th>Total Amount</th>
                {
                    props.readOnly ?  "" : //bydefault false as boolean default is false
                    <>
                        <th>Remove</th>
                        <th>Edit</th>
                    </>
                }   
            <tbody>
            {  
            cartList && cartList.length >0 ?cartList.map((item)=>{
                console.log(item);
                return(
                <CartItemComponent item={item} key={item._id} readOnly={props.readOnly}/>
                )
                }) :""
            }
        </tbody>
        </table> 
        <CartSummary data={calculateSummary(cartList)} couponCode={couponCode}/>
        {props.readOnly? "" :
            <> 
                <button onClick={()=>{onSaveCart(cartList)}}>Save Cart</button>
                <button onClick={()=>{navigate("/checkout")}}>Proceed to Checkout</button>
            </>
        }
    </div>
    : <h5>Cart Empty!Please Add Products to Cart or Login using your account</h5>
    }
    </>)
}

export default CartComponent