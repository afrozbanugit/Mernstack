import React from "react";
import { useNavigate,Link } from "react-router-dom";

export default function Home(){
    
    const gotoTopics = useNavigate();
    let eventHandlerfn=()=>{
        gotoTopics("/topics");
    }
    return(<>
        <h2>In Home Page</h2>
        <h3>To see topics discussed click below!!</h3>
        <button className="btn btn-primary"onClick={eventHandlerfn}>Topics</button>
    </>)
}