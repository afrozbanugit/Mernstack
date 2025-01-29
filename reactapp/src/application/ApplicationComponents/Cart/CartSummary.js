import React from "react";

let CartSummary = (props)=>{
    let { count,totalAmount} = props.data;
    let couponCode = props.couponCode;
return(<>
    {props.readOnly? <></> :
    <>
    <h5>Cart Summary</h5>
    <p>Total number of Items: {count}</p>
    <p>Total amount: {totalAmount}</p>
    {couponCode ? <>
        <p>Coupon {couponCode} applied to the cart</p>
        <p><strong>Reduced Price : {totalAmount - totalAmount * 0.1}</strong></p>
        </> : <>
        <span style={{backgroundColor:"yellow"}}>Please go to Coupon tab to see today's deals</span>
        <br></br>
        </>}
    </>
    }
</>)
}

export default CartSummary;