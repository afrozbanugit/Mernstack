import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItemToCart } from "../../state/cart/CartAction";
import {FaStar} from "react-icons/fa";
import { AddNewNotification } from "../../state/Notification/NotificationAction";

export const ProductItemComponent = (props)=>{
    let {product} = props;
    let productRating = props.product.rating;
    let products = useSelector(store=>store.ProductReducer.products);
    let notificationCount = useSelector(store=>store.NotificationReducer.notificationCount);
    let dispatcher = useDispatch();
    console.log("Product Item component ",product);

    const addProductToCart = (selectedProduct)=>{
        console.log("Add selected product to cart", selectedProduct);
        dispatcher(AddItemToCart(selectedProduct));
        const notificationItem={
            message:selectedProduct.prodName + " is added to cart",
                    count:++notificationCount}
        dispatcher(AddNewNotification(notificationItem));
    }

    const starArray =[1,2,3,4,5]
    return(<div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
             <img className="card-img-top mx-auto" src= {require('./shopping_Cart.jpg')}/> 
            <div className="card-body d-flex flex-column">
            
            <p>{product.prodName}</p>
            <div className="card-text">${product.price}</div>
            <div>
            {starArray.map((star,index)=>{
                    const ratingValue = index +1;  
                    return(                         
                        <FaStar key={index} className="star" aria-readonly color={ratingValue <= productRating ?"rgba(255, 193, 7, 0.88)": "#e5e4e1"}/>
                          )            
            })}
            </div>
            <div className="card-text">{product.description}</div>            
            </div>
        </div>
        <button className="btn btn-primary d-inline ml-4" onClick={()=>{addProductToCart(product)}}>Add To Cart</button>
    </div>
            
    )
}