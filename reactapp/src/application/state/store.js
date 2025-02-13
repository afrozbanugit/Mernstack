import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./User/UserReducer";
import StudentReducer from "./Student/StudentReducer";
import ProductReducer from "./Product/ProductReducer";
import CartReducer from "./cart/CartReducer";
import CouponReducer from "./Coupon/CouponReducer";
import OrderReducer from "./orders/OrderReducer";
import HobbyReducer from "./hobby/HobbyReducer";
import NotificationReducer from "./Notification/NotificationReducer";
//store - is a redux object which helps us handle state changes
//reducer - is a function which works with switch case (for each action type) and updates the state
// for every change returns new state
//each component will have its respective reducer 
//action - is the object a reducer accepts to create a new state
//action - object => action type (increment) ,payload (+5)

//we can add multiple reducers and combine them togather to have one root reducer and add it to store
let rootReducer = combineReducers({  
  userReducer, //userReducer : userReducer
  ProductReducer,
  CartReducer,
  CouponReducer,
  OrderReducer,
  HobbyReducer,
  NotificationReducer
    
  //  StudentReducer  
})

//create or configure and export the store from this code
export default configureStore(
    {reducer : rootReducer},
    {},//inital state if we want to set from store instead of reducer
)