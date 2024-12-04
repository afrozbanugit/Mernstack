import React from "react";
//4. create a functional component SuccessChild,
// make it child of Success and pass Name and Address to it from Success

export default function SuccessChild(props){


    return(<>
        <h4>Name from parent component : {props.name}</h4>
        <h4>Address from parent component : {props.address}</h4>
        {props.successStory}
    </>)
}