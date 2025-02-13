import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReviewProduct from "../StarRating/ReviewProduct";
import {AddProductReviewtoDB} from "../../state/reviewproduct/ReviewProductAction"

const ProductDetails =(props)=>{

    const navigate =useNavigate();
    const dispatcher = useDispatch();
    const [reviewProduct,setReviewProduct] = useState(false);
    const [isModalOpen,setIsModalOpen] = useState(false);
    let product = props.product;
    let user =props.user;
    const productId =props.product._id;
    const userId=props.user._id;
    let status = props.status;
    let diffInDays = props.diffInDays;
    console.log("Status ",status);
    const onReview=(product,user)=>{
        /* console.log("Review product ",product);
        console.log("Review product by user ",user); */        
        setReviewProduct(true);
        setIsModalOpen(true);
    }

    const CloseModal=()=>{
        console.log("Close Modal");
        setIsModalOpen(false);
        setReviewProduct(false);
    }

    const saveRatings =(ratingdata)=>{
        console.log("Rating data in Order-ProductDetails ", ratingdata)
        dispatcher(AddProductReviewtoDB(ratingdata));
        setIsModalOpen(false);
        setReviewProduct(false);
        
    }

    return(<>    
    <div style={{fontSize:"small"}}>Name    : {product.prodName}</div>
    <div style={{fontSize:"small"}}>Price   : {product.price}</div>
    <div style={{fontSize:"small"}}>Desc    : {product.description}</div>
    <div style={{fontSize:"small"}}>Rating  : {product.rating}</div>
    <div style={{fontSize:"small"}}>Quantity: {product.quantity}</div>
    {status=='Delivered'? 
    <>
    <Button variant="outline-dark" size="sm" onClick={()=>{onReview(product,user)}}>Review Product</Button> 
        {reviewProduct ?
                 
        <ReviewProduct product={product} user={user} readonly={false} CloseHandlerFn={CloseModal} confirmHandlerFn={saveRatings}/>            
          : " "
        }
    </>
    : ""
    }
    </>)
}

export default ProductDetails;