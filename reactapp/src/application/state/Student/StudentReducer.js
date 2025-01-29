import * as ActionTypes from "../ActionTypes"

let initialState={student:{
    name:"defaultstudent",
    age:"",
    department:"",
    graduated:""
}}

let studentReducer =(state=initialState,action)=>{
    console.log("Current state in store ",state);
    switch(action.type){
        case(ActionTypes.ADD_STUDENT) : return ({student:action.payload})
        default : return state;
    }
    
}

export default studentReducer;