import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./app.css"
import Home from "./components/Home";
import Success from "./components/Success";
import UserSignin from "./components/UserSignin";
import LifeCycle from "./components/LifeCycle";
import StateChange from "./components/StateChange";
export default class Application extends React.Component {


    render(){
        
        return(
        <>
            <h3>React Application</h3>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/success" element={<Success/>}/>
                <Route path="/signin" element={<UserSignin/>}/>
                <Route path="/lifecycle" element={<LifeCycle/>}/>
                <Route path="/statechange" element={<StateChange/>}/>
            </Routes>
            </BrowserRouter>
        </>)
    }
}