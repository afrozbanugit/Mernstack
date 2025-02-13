import * as ActionTypes from '../ActionTypes';
const InitialState = [];

let CartReducer = (state=InitialState,action)=>{
 //   console.log("action type is ", action.type);
    switch(action.type){
        
        case ActionTypes.ADD_ITEM_TO_CART : {
        //    console.log("Adding new item to cart ", action.payload.selectedProduct);
            const newState = state.filter((item)=>item._id!=action.payload.selectedProduct._id);
            return([...newState,action.payload.selectedProduct]);
        }
        case ActionTypes.REMOVE_ITEM :{
            let newState = state.filter((item)=>item._id !=action.payload.itemId)
            return(newState);
        }
        case ActionTypes.UPDATE_ITEM_IN_CART :{
            return state.map((cartItem)=>{
                if(cartItem._id == action.payload.itemId)
                    return {...cartItem,quantity:action.payload.itemQuantity}
                return cartItem;
            })
        }
        case ActionTypes.EMPTY_CART:{
            console.log("Empty Cart");
            return [];
        }
        default : {
         //   console.log(" Default case in cart reducer");
            return state;
        }
    }
}
export default CartReducer;