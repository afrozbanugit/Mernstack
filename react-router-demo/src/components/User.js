import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userId} = useParams();
    return(<>
        <h3>In User page {userId}</h3>
    </>)

}