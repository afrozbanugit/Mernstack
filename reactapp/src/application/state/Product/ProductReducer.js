import * as ActionType from "../ActionTypes"
let InitialState={
            product:{prodName:"",
                    price:"0",
                    description:"",
                    rating:"0"
                    },
            products:[]
            }

let ProductReducer =(state=InitialState,action)=>{
 //   console.log("Current state in store ",state);
    switch(action.type){
        case ActionType.ADD_PRODUCT : {
            console.log("Add products to store->" ,action.payload.products );
            return {...state,products:action.payload.products}
        }
        default: return state;
    }

}

export default ProductReducer;