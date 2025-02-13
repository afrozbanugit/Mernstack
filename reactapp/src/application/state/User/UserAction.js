import * as ActionTypes  from "../ActionTypes"
import axios from "axios";
import {fetchCartItems} from "../../state/cart/CartAction"
/* When the below function is dispatched it returns a java script object that is returned to store.
The store then calls the corresponding reducer with the action type and new state- this will be taken care
of by Redux internally. Hence we dont call the reducer explicitely. */

//action accepts payload value/object to be used in user reducer switch
export const AddUserToStore = (user) =>{
    return{
        type:ActionTypes.ADD_USER,
        payload:{user}
    }
}

//When we dispatch the below function, it returns a function instead of a Javascript Object.
// which is intercepted by Redux Thunk middleware and calls the function.
//Redux-Toolkit includes redux-thunk middleware by default.
/* Action Creator:
You create an action creator that returns a function instead of a plain action object. 
This function will receive dispatch and getState as arguments. */
export const saveToDbUsingFetch= function(user){
    console.log("Inside saveToDBUsingFetch action creator");
    //The belwo function has access to dispatch because it is a closure within the function
    //that called saveToDbUsingFetch
   /*  Inside the Function:
The function can perform asynchronous operations, such as making API calls. Once the asynchronous operation is complete, 
it can then dispatch a plain action object to update the store. */
    return (async function(dispatch){
       try{
            const rawResponse = await fetch('http://localhost:9000/user/api/signinup', {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                 });
            const savedUser = await rawResponse.json();    
            console.log(savedUser);
            dispatch(AddUserToStore(savedUser))
            
        }catch(error){
        console.log(error);
        }
    })

}
//We can achieve fetch using Axios library as well
export const SaveUserToDBUsingAxios = (userObj)=>{
    console.log("SaveUserToDBUsingAxios called")
    return (dispatch)=>{
        axios.post("http://localhost:9000/user/api/signinup",//uri or end point of singninup api
            userObj // the user state object we dispatch from the user component
        ).then((collection)=>{
            let loggedUser = collection.data
            console.log("Logged user ",loggedUser)
            dispatch(AddUserToStore(loggedUser))
            dispatch(fetchCartItems(loggedUser._id))
        })
        .catch((error)=>console.log(error))
    }
}

export const UpdateUserInfo =(userObj)=>{
    return(async function(dispatcher){
       let updatedUser= await axios.post("http://localhost:9000/user/api/update",userObj);
       console.log("updated user data", updatedUser.data);
       dispatcher(UpdateUserInStore(updatedUser.data))
    })
}

export const UpdateUserInStore =(user)=>{
    return{
        type:ActionTypes.UPDATE_USER_IN_STORE,
        payload:{user}
    }
}