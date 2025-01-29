import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Topics"
import ReactPage from "./components/ReactPage";
import PropTypes from "./components/PropTypes";
import VirtualDom from "./components/VirtualDom";
import "./App.css"
import Router from "./components/Router";
import Topics from "./components/Topics";

export default function App(){
//5 Topics <Webpack, React, Router, VirtualDom,PropTypes>
    return(<>        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/topics" element={<Topics/>}/>
                <Route path="/react/:userId" element={<ReactPage/>}/>
                <Route path="/proptypes" element={<PropTypes/>}/>
                <Route path="/virtualDom" element={<VirtualDom/>}/>
                <Route path="/router" element={<Router/>}/>
            </Routes>
        </BrowserRouter>
    </>)

}