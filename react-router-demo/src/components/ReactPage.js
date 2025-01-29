import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "./CommonComponents/Header";
import User from "./User";

export default function ReactPage(){

    const {userId} = useParams();
    const [user,setUser] = useState({userId:userId,name:"Keith",email:"Keith@gmail.com",address:"123 xyz ave"});

    function onResetEmail(){
        console.log(user);
        setUser((previousState)=>{
            return ({...previousState,email:"Keith123@gmail.com"});
        });
        console.log(user);
    }
    return(<>
        <Header/>
        <h1>React Page </h1>
        <h3>In user's id : {userId}</h3>
        <User user={user}/>
        <button className="btn btn-primary" onClick={onResetEmail}>Reset Email</button>
    </>)
}