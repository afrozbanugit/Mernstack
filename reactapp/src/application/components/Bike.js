import React from "react";
import { useState } from "react";

export default function Bike(props){   

    
   // console.log("Current state is ", model);
    return(<>
        <h2>Bike component</h2>
        <p>{props.bikeno} bike no</p>
    </>);
}