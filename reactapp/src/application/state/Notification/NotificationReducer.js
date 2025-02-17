import * as ActionTypes from "../ActionTypes"

const InitialState = {notificationList:["This Weeks Deals!",
                                    "Purchase History",
                                    "Browse Products Catalogue"],
                        notificationCount:0                                
                    }
const NotificationReducer =(state=InitialState,action)=>{
   
    switch(action.type){
        case(ActionTypes.ADD_NEW_NOTIFICATION):{
            return {notificationList:[...state.notificationList,action.payload.message],
                    notificationCount:state.notificationCount+1}
            
        }
        case(ActionTypes.UPDATE_NOTIFICATION_COUNT):{
            return{...notificationList,notificationCount:action.payload.count}
        }
        case(ActionTypes.REMOVE_NOTIFICATION):{
            let newstate= state.notificationList.filter((notification)=>{
                return !(notification.includes("cart for checkout") || notification.includes("added to cart"))
            })
            return{notificationList:newstate,notificationCount:newstate.length-3}
        }
        default: return state;
    }
}
export default NotificationReducer;
    