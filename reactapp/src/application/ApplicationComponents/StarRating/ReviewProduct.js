import React from "react";
import StarRating from "./StarRating";
import Button from "react-bootstrap/button"
import { useNavigate } from "react-router-dom";

const ReviewProduct =(props)=>{
const navigate = useNavigate();
const product = props.product;
const user = props.user;
const isOpen =props.isOpen;
const confirmHandlerFn = props.confirmHandlerFn;
const CloseHandlerFn = props.CloseHandlerFn;

const onConfirm=(ratingdata)=>{
   //     console.log("ratingdata-reviewProd ", ratingdata);  
        confirmHandlerFn(ratingdata);  
}

return(
    <div className="review" >
        <StarRating product={product} user={user} onConfirm={onConfirm} onClose={CloseHandlerFn}/>
        
    </div>
    
)
}

export default ReviewProduct;