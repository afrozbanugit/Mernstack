import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import {FaStar} from "react-icons/fa";
import Button from "react-bootstrap/button"
import CloseButton from 'react-bootstrap/CloseButton';

const StarRating =(props)=>{
    
    const [rating,setRating] = useState(null);
    let [comments,setComments]= useState("");
    const navigate = useNavigate();
    const product = props.product;
    const readonly = props.readonly
    const user = props.user;
    const onClose = props.onClose;
    const onConfirm = props.onConfirm;
   // console.log(product);
    let starArray =[1,2,3,4,5]

    const changeRating =(event)=>{
     //   console.log("Event ", event.target.value);
        setRating(event.target.value);
    }
    
    const saveComments =(event)=>{
        setComments(event.target.value);
        console.log("Comments-StarRating" ,comments);
    }
   
    const confirmRatings =()=>{
        let ratingdata ={rating:rating,
                        comments:comments,
                        productId:product._id,
                        userId:user._id,
                        productName:product.prodName};
        console.log("ratingdata ", ratingdata)
        onConfirm({ratingdata});
    }

    return(<>
    { readonly ? " " :  
    <div>  
        <div data-bs-theme="dark" className='bg-dark p-2'>
        </div>  
        <div>
            {starArray.map((star,index)=>{
                
                const ratingValue = index +1;
                console.log(ratingValue);
                return( <label key={index}>
                    <input type="radio" className="starinputradio" 
                        value={ratingValue} name={rating} onChange={(event)=>changeRating(event)}/>
                        {console.log("rating ",rating)}
                        
                    <FaStar className="star" color={ratingValue <= rating ?"rgba(255, 193, 7, 0.88)": "#e5e4e1"}/>
                    </label>)            
            })}
        </div>
        <br></br>
        <textarea value={comments} name="comments" placeholder="Review Comments" onChange={(event)=>saveComments(event)}/>
        <Button variant="outline-light" size="sm" onClick={()=>{confirmRatings()}}>
                        Confirm</Button>
        <Button variant="outline-light" size="sm" onClick={onClose}>
                        Cancel</Button>
    </div>        
    }    
    </>)
}

export default StarRating;