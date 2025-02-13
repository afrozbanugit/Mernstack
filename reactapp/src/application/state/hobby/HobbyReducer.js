import * as ActionTypes from "../ActionTypes"
let InitialState ={hobbylist :[]};

const HobbyReducer =(state=InitialState,action)=>{
  //  console.log("State in hobby reducer ", state);
 //   console.log("action payload in hobby reducer ", action.payload);
    switch(action.type){
        case(ActionTypes.ADD_HOBBY_TO_STORE):{
            const newstate = action.payload.map((hobbyObj)=>{
           //     console.log("hobbyobj ",hobbyObj);
                return hobbyObj.Hobby;
            })
            return({hobbylist:newstate})
        }
        default : return state;
    }
}
export default HobbyReducer;