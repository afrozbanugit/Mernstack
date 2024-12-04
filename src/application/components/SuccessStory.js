import React, { useState } from "react";
//5.create SuccessStory as another component, pass this as props in SuccessChild from Success component
//8. pass a random value from SuccessStory component back to Success

export default function SuccessStory(props){
    const[message,setMessage] =useState("Hardwork never fails!");

    let onSendMessage=()=>{
        props.messageHandlerfn(message);
    }

    return(<>
        <h4>Success Story Component</h4> 
        <button className="btn btn-primary"onClick={onSendMessage}>Send Message</button>
    </>)
}