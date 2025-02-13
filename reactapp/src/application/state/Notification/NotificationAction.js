import * as ActionTypes from "../ActionTypes"

export const AddNewNotification=(notificationItem)=>{
    return{
        type:ActionTypes.ADD_NEW_NOTIFICATION,
        payload:{message:notificationItem.message,count:notificationItem.count}
    }
}

/* export const UpdateNotification=(notificationItem)=>{

    return{
        type:ActionTypes.ADD_NEW_NOTIFICATION,
        payload:{}
    }

} */

export const RemoveNotification=(notificationItem)=>{

    return{
        type:ActionTypes.REMOVE_NOTIFICATION,
        payload:{message:notificationItem.message,count:notificationItem.count}
    }

}