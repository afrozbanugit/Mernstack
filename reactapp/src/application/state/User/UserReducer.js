import * as ActionType from "../ActionTypes"
let initialState={user:
    {userName:"",password:"",street:"",mobile:"",email:"",hobby:""}
    
}

//this will be used by store to map the action type and then update/create new user state
let UserReducer = (state=initialState,action)=>{
    console.log("Current State in User Reducer",state);
   
    switch(action.type){
        case(ActionType.ADD_USER): return{user:action.payload};
        
        default: return state;
        
    }
}
export default UserReducer;