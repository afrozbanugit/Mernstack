import React, { useState } from "react";
import {FaStar} from "react-icons/fa";
import Button from "react-bootstrap/button"
const StarRating =(props)=>{
    
    const [rating,setRating] = useState(null);
    const product = props.product;
    const readonly = props.readonly
    console.log(product);
    let starArray =Array(5).fill(null);
    console.log(starArray);
const changeRating =(event)=>{
    console.log("Event ", event.target.value);
    setRating(event.target.value);
}

    return(<>
    { readonly ? " " :  
    <div>        
        <div>
            {starArray.map((star,index)=>{
                
                const ratingValue = index +1;
                console.log(ratingValue);
                return( <label key={index}>
                    <input type="radio" className="starinputradio" 
                        value={ratingValue} name={rating} onChange={(event)=>changeRating(event)}/>
                        {console.log("rating ",rating)
                        }
                    <FaStar className="star" color={ratingValue <= rating ?"rgba(255, 193, 7, 0.88)": "#e5e4e1"}/>
                    </label>)            
            })}
        </div>
        <br></br>
        <textarea placeholder="Review Comments"/>
        <Button variant="outline-light" size="sm" onClick={()=>{onConfirm(product,user)}}>
                        Confirm</Button>
        <Button variant="outline-light" size="sm" onClick={()=>{navigate("/recentorders")}}>
                        Cancel</Button>
    </div>        
    }    
    </>)
}

export default StarRating;