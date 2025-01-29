import React from "react";
import StarRating from "./StarRating";
import Button from "react-bootstrap/button"
import { useNavigate } from "react-router-dom";

const ReviewProduct =(props)=>{
const navigate = useNavigate();
const product = props.product;
const user = props.user;
const onConfirm=(product,user)=>{

}
return(<>
    <div className="review" >
        <StarRating product={product} user={user}/>
        
    </div>
</>)
}

export default ReviewProduct;