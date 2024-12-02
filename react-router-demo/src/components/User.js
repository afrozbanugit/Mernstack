import React from "react";
import { useParams } from "react-router-dom";

export default function User(props){
    const {userId} = useParams();
    return(<>
        <h3>In User page {userId}</h3>
        <p>Name : {props.user.name}</p>
        <p>Email : {props.user.email}</p>
        <p>Address : {props.user.address}</p>
    </>)

}