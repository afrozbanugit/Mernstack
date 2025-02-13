import axios from "axios";
import * as ActionTypes from "../ActionTypes";

//ADD_HOBBY_TO_DB

export const AddHobbyToDB =(hobbylist)=>{
    return(async function(dispatcher){
     try{   
     const response = await axios.post("http://localhost:9000/hobby/api/save",hobbylist);
     console.log("response data after saving hobby ", response);
     dispatcher(AddHobbytoStore(response.data)) ;
     }catch(error){
        console.error("Error while posting data to db");
     }      
    })
}

export const AddHobbytoStore = (hobbylist)=>{
    return{
        type:ActionTypes.ADD_HOBBY_TO_STORE,
        payload:hobbylist
    }

}
//Fetch hobbies from db
export const FetchHobbiesfromDB =()=>{
    return(async function(dispatcher){
     try{   
     const response = await axios.get("http://localhost:9000/hobby/api/getall");
  //   console.log("hobby data from db ", response.data);
     dispatcher(AddHobbytoStore(response.data)) ;
     }catch(error){
        console.error("Error while fetching data to db");
     }      
    })
}