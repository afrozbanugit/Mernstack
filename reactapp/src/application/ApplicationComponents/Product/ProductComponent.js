import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef,useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {saveProductToDB} from "../../state/Product/ProductAction"
import DisplayProducts from "./DisplayProduct";


export default function ProductComponent(props){
    let product = useSelector((store)=>store.ProductReducer.product)
    let dispatcher = useDispatch();
    let prodNameRef= useRef(null);
    let priceRef= useRef(null);
    let descRef= useRef(null);
    let ratingRef= useRef(null);

    useEffect(()=>{
        console.log("Inside useEffect of ProductComponent");
        console.log("Logging product inside useEffect of ProductComponent ",product);
        prodNameRef.current.value=product.prodName;
        priceRef.current.value=product.price;
        descRef.current.value=product.description;
        ratingRef.current.value=product.rating;
    },[])
    const navigate = useNavigate(); 

    let onSaveProduct=(event)=>{
        let pName=prodNameRef.current.value;
        let pri =priceRef.current.value;
        let desc = descRef.current.value;
        let rating = ratingRef.current.value;
        let product ={prodName:pName,price:pri,description:desc,rating:rating}
        console.log("Product ", product);
        dispatcher(saveProductToDB(product));
        navigate("/displayProduct");
        event.preventDefault();
    }

    return(<>
        <form className="col-12 ">
             <label>
                    <b>Product Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={prodNameRef}
                    placeholder="Product name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Price :</b>
                    <input type="number" className={"form-control col-md-12"} ref={priceRef}
                    placeholder="Price" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Description :</b>
                    <input type="text" className={"form-control col-md-12"} ref={descRef}
                    placeholder="Please describe" maxLength={20} />
                </label>
                <br/>
                <label>
                    <b>Rating :</b>
                    <input type="number" className={"form-control col-md-12"} ref={ratingRef}
                    placeholder="Please rate the product" maxLength={20} />
                </label>
                <br/>
                <br/>
                <input type="submit" onClick={onSaveProduct} className="btn btn-primary"
                        value="Save Product"/>
        </form>
        <hr></hr>
        
    </>)
}