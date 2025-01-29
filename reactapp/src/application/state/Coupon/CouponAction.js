import * as ActionTypes from "../ActionTypes"
export const AddCouponCodeToStore = (couponCode)=>{
    console.log("Inside coupon action ",ActionTypes.ADD_NEW_COUPON)
return {
    type: ActionTypes.ADD_NEW_COUPON,
    payload: {couponCode}
}
}