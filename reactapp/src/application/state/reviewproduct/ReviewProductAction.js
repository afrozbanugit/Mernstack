import * as ActionTypes from "../ActionTypes";
import axios from "../../config/axiosConfiguration";

export const AddProductReviewtoDB =(ratingdata)=>{

    return(async(dispatcher)=>{
      let response=  await axios.post("http://localhost:9000/review/api/review",ratingdata);
      console.log("Response - add review to db ",response.data);
    })
}