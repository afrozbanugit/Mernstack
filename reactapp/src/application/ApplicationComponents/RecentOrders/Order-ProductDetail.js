import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReviewProduct from "../StarRating/ReviewProduct";
 
const ProductDetails =(props)=>{

    const navigate =useNavigate();
    const [reviewProduct,setReviewProduct] = useState(false);
    let product = props.product;
    let user =props.user;
    const productId =props.product._id;
    const userId=props.user._id;
    let status = props.status;
    let diffInDays = props.diffInDays;

    const onReview=(product,user)=>{
        console.log("Review product ",product);
        console.log("Review product by user ",user);
        setReviewProduct(true);
      //  navigate("/rating",{state : {product:product,user:user,readonly:false}});
    }

    return(<>    
    <div style={{fontSize:"small"}}>Name    : {product.prodName}</div>
    <div style={{fontSize:"small"}}>Price   : {product.price}</div>
    <div style={{fontSize:"small"}}>Desc    : {product.description}</div>
    <div style={{fontSize:"small"}}>Rating  : {product.rating}</div>
    <div style={{fontSize:"small"}}>Quantity: {product.quantity}</div>
    {status=='Delivered'? 
    <>
    <Button variant="outline-dark" size="sm" onClick={()=>{onReview(product,user)}}>
        Review Product</Button> 
        {reviewProduct ?  <ReviewProduct product={product} user={user} readonly={false}/>  : " "}
    </>
    : ""
    }
    </>)
}

export default ProductDetails;