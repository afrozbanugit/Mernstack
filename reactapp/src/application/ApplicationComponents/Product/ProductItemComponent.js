import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItemToCart } from "../../state/cart/CartAction";

export const ProductItemComponent = (props)=>{
    let {product} = props;
    let products = useSelector(store=>store.ProductReducer.products);
    let dispatcher = useDispatch();

    console.log("Product Item component ",product);

    const addProductToCart = (selectedProduct)=>{
        console.log("Add selected product to cart", selectedProduct);
        dispatcher(AddItemToCart(selectedProduct));
    }
    return(<div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
             <img className="card-img-top mx-auto" src= {require('./shopping_Cart.jpg')}/> 
            <div className="card-body d-flex flex-column">
            {/*<h5 className="card-title">
                <p>{product.prodName}</p>
            </h5>
             <div className="ratings mt-auto">
                    <div className="rating-outer">
                        <div className="rating-inner" style={{width : `${product.ratings/5 * 100}%`}} ></div>
                    </div>
                </div> */}
            <p>{product.prodName}</p>
            <p className="card-text">${product.price}</p>
            <p className="card-text">{product.description}</p>
            {/* <Link to={"/product/"+product._id} id="view_btn" className="btn btn-block">View Details</Link> */}
            </div>
        </div>
        <button className="btn btn-primary d-inline ml-4" onClick={()=>{addProductToCart(product)}}>Add To Cart</button>
    </div>
            
    )
}