import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { RemoveItemFromCart,UpdateItemsInCart } from "../../state/cart/CartAction";
let CartItemComponent =(props)=>{
    let item = props.item;
    let [Quantity,setQuantity] = useState(item.quantity);
    let dispatcher = useDispatch();
    console.log("props.readOnly ",props.readOnly);
    let onRemoveItem =(itemId)=>{
    dispatcher(RemoveItemFromCart(itemId));
}

let onUpdateItem =(itemId)=>{
    console.log("Quantity " , Quantity);
    dispatcher(UpdateItemsInCart(itemId,Quantity))
}

    return(
        <tr>
            <td>{item.prodName}</td>
            <td>{item.price}</td>  
            {props.readOnly ? "" : 
            <>
            <td>{item.description}</td>
            <td>{item.rating}</td>
            </>}              
            <td>{props.readOnly? Quantity :
                <input type="number" value={Quantity} 
                    onChange={(event)=>{setQuantity(event.target.value)}}></input>}</td>
            <td>{item.price * item.quantity}</td>
            {props.readOnly? <></> : <>
            <td><button onClick={()=>onRemoveItem(item._id)}>Remove</button></td>
            <td><button onClick={()=>onUpdateItem(item._id,item.quantity)}>Update</button></td>
            </>
            }
        </tr>
        )
}
export default CartItemComponent;