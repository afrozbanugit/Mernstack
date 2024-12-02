import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props){
    
    return(
        <> 
            <nav>
                <NavLink to="/home"  className="button" activeclassname="active"> Home </NavLink>
                <NavLink to="/react/1"  className="button" activeclassname="active"> React </NavLink>
                <NavLink to="/proptypes"  className="button" activeclassname="active"> PropTypes </NavLink>
                <NavLink to="/virtualDom"  className="button" activeclassname="active"> Virtual Dom </NavLink>
                <NavLink to="/router"  className="button" activeclassname="active"> Router </NavLink>
                <NavLink to="/topics"  className="button" activeclassname="active"> Topics </NavLink>
                
            </nav>
            <hr/>
        </>
    )
}
