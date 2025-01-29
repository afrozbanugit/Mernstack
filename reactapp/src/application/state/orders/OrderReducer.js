import * as ActionTypes from '../ActionTypes'
let InitialState= {recentorders:[]};

const OrderReducer =(state=InitialState,action)=>{
    switch(action.type){
        case ActionTypes.ADD_ORDERLIST_TO_STORE:{
            console.log(" Order reducer - recent order ")
            return {...state,recentorders:action.payload.recentorders}
        }
        case(ActionTypes.REMOVE_ORDER_IN_STORE):{
            const newstate = state.recentorders.filter((order)=>{ return order._id != action.payload.orderId})
            return {newstate};
        }
        case(ActionTypes.UPDATE_ORDER_IN_STORE):{
            const newstate=  state.recentorders.map((order)=>{
                console.log("order id ", order._id);
                console.log("order.isCancelled? ", order.isCancelled);
                if(order._id==action.payload.updatedOrder._id){
                    console.log("Order being updated ",order);
                    return {...order,isCancelled:action.payload.updatedOrder.isCancelled,
                        date:action.payload.updatedOrder.date
                    };
                }
                return order;
            })
            return {recentorders:newstate}
        }
        default :
        return state;
    }
}

export default OrderReducer;