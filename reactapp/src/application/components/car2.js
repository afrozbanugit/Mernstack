import React from "react";
import { useState } from "react";

export default function Car2(){
    let [model,setModel] = useState({brand:"Tesla",year:"2020",color:"Red"});

    function updateColor(){
        setModel((previousState)=>{
            return{...previousState,color:"Gold"}
        }
        );
    }
    console.log("Current state is ", model);
    return(<>
        <h2>My car is {model.brand} and {model.color} color and year is {model.year}</h2>
        <button onClick={updateColor}>Change car color</button>
    </>);
}