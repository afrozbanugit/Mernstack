import * as ActionTypes from "../ActionTypes" 
let InitialState = {couponCode:""}

let CouponReducer = (state=InitialState,action) =>{
    
    switch(action.type){
        
        case ActionTypes.ADD_NEW_COUPON : {
       //     console.log("action type ", action.type);
            return({couponCode:action.payload.couponCode})
        }
        default : {
            return state;
        }
    }


}
export default CouponReducer;