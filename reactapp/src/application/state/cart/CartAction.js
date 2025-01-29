import axios from "axios";
import { ADD_ITEM_TO_CART,REMOVE_ITEM,UPDATE_ITEM_IN_CART } from "../ActionTypes";

export const AddItemToCart =(selectedProduct)=>{
    console.log("Inside CartAction - AddItemToCart")
    return {
        type : ADD_ITEM_TO_CART,
        payload : {selectedProduct} 
    }
}

export const RemoveItemFromCart = (itemId)=>{
    return{
        type:REMOVE_ITEM,
        payload: {itemId:itemId}
    }
}

export const UpdateItemsInCart =(itemId,itemQuantity)=>{

    return{
        type: UPDATE_ITEM_IN_CART,
        payload:{itemId,itemQuantity}
    }

}

export const SaveCartToDB =(cartList,userId)=>{
    return(
        function(dispatcher){
        axios.post("http://localhost:9000/cart/api/savecart",{cartList,userId})
        .then((response)=>
            {   
                console.log(response)
                dispatcher(AddItemToCart);
            })
        .catch(error=>console.error(error))
    }
)
}

export const fetchCartItems = (userId)=>{
    console.log("User ID", userId);
    return(async function(dispatcher){
       let response = await axios.post("http://localhost:9000/cart/api/getall",{userId:userId});
       if(response.length > 0){
        console.log("Cart Action - Fetch Cart Item" ,response.data[0].cart);
        let cartItems = response.data[0].cart;
        console.log("Cart Items ", cartItems);
       cartItems && cartItems.length >0 ? cartItems.forEach(item => {
            dispatcher(AddItemToCart(item));
       }) : [];
       }else{
        console.log("Cart is currenty empty for user ", userId);
       }
       
     //  dispatcher(ADD_ITEM_TO_CART)
    })
}