import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "./CommonComponents/Header";
import User from "./User";

export default function ReactPage(){

    const {userId} = useParams();
    const [user,setUser] = useState({userId:userId,name:"Keith",email:"Keith@gmail.com",address:"123 xyz ave"});

    function onResetEmail(previousState){
        console.log(user);
        setUser({...previousState,email:"Keith123@gmail.com"});
    }
    return(<>
        <Header/>
        <h1>React Page </h1>
        <h3>In user's id : {userId}</h3>
        <User user={user}/>
        <button className="btn btn-primary" onClick={onResetEmail}>Reset Email</button>
    </>)
}