import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props){
    
    return(
        <> 
            <nav>
                <NavLink to="/home" className="button" activeclassname="active"> Home </NavLink>
                <NavLink to="/success"  className="button" activeclassname="active"> Success </NavLink>
                <NavLink to="/signin"  className="button" activeclassname="active"> User SignIn </NavLink>
                <NavLink to="/lifecycle" className="button" activeclassname="active"> LifeCycle Hooks </NavLink>
                <NavLink to="/statechange"  className="button" activeclassname="active"> StateChange </NavLink>                
            </nav>
            <hr/>
        </>
    )
}
