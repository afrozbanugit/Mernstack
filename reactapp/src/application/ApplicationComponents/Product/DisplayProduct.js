import React, { useEffect } from "react";
import { FetchProductsFromDB } from "../../state/Product/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { ProductItemComponent } from "./ProductItemComponent";

let DisplayProducts = (props)=>{
    let products = useSelector(store=>{return store.ProductReducer.products})
    let cartList = useSelector(store=>store.CartReducer);
    console.log("cartlist -> ",cartList);
    let dispatcher = useDispatch();
    console.log("Display Product component - products from store ",products);
    //useEffect will execute once after render ie like ComponentDidMount lifecycle
    useEffect(()=>{
        products && products.length ==0?dispatcher(FetchProductsFromDB()):[];
    }      
    ,[])
    return(<>
    <div className="row">
            {products && products.length > 0?
            products.map((productItem)=>
            {
                console.log("Product Item ->",productItem);
                return(                           
                    <ProductItemComponent product={productItem} key={productItem._id} />
                )
            })
            :
            <h4>No Products Added to Cart</h4>}
            {
                cartList && cartList.map((item)=>{
                    return(<>
                    <p>{item.prodName}</p>
                    </>)
                })
            }
            
    </div>
    </>)
}

export default DisplayProducts;