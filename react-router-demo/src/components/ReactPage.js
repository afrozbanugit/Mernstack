import React from "react";
import Header from "./CommonComponents/Header";
import { useParams } from "react-router-dom";

export default function ReactPage(){

    const {userId} = useParams();
    
    return(<>
        <Header/>
        <h1>React Page </h1>
        <h3>In user's id : {userId}</h3>
    </>)
}