import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../app.css"

let header = (props)=>{
    let user = props.user;
    let username = user.userName;
    console.log("Username ",username);

    return(<>
    {/* {username !="" && username != "admin"?
        <>
        <h4>Hi {username} , Welcome to Shopping Cart sponsored by Tech Team SIT</h4>
            <NavLink to="/displayProduct"  className="button" activeclassname="true"> Saved Products </NavLink>
            <NavLink to="/cart"  className="button" activeclassname="true"> Cart </NavLink>
            <NavLink to="/coupon"  className="button" activeclassname="true"> Deals & Coupons </NavLink>
        </>
        :
        <h6>Welcome to Shopping Cart sponsored by Tech Team SIT!
        <div>
            <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
            <NavLink to="/login"  className="button" activeclassname="true"> User </NavLink>
        </div>
        </h6>
    } */}
    { username == 'admin'?
        <div>
            <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
            <NavLink to="/login"  className="button" activeclassname="true"> User </NavLink>
            <NavLink to="/product"  className="button" activeclassname="true"> Product </NavLink>
            <NavLink to="/displayProduct"  className="button" activeclassname="true"> Saved Products </NavLink>
            <NavLink to="/cart"  className="button" activeclassname="true"> Cart </NavLink>
            <NavLink to="/coupon"  className="button" activeclassname="true"> Deals & Coupons </NavLink>
        </div> 
        : username !="" ? 
            <>
            <h4>Hi {username} , Welcome to Shopping Cart sponsored by Tech Team SIT</h4>
                <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
                <NavLink to="/login"  className="button" activeclassname="true"> User </NavLink>
                <NavLink to="/displayProduct"  className="button" activeclassname="true"> Products </NavLink>
                <NavLink to="/cart"  className="button" activeclassname="true"> Cart </NavLink>
                <NavLink to="/coupon"  className="button" activeclassname="true"> Deals & Coupons </NavLink>
                <NavLink to="/recentorders"  className="button" activeclassname="true"> Orders </NavLink>
            </>
            :
            <div>
                <h4>Welcome to Shopping Cart sponsored by Tech Team SIT!</h4>
            
                <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
                <NavLink to="/login"  className="button" activeclassname="true"> User </NavLink>
                <NavLink to="/about" className="button" activeclassname="true"> About </NavLink>
                <NavLink to="/clock" className="button" activeclassname="true"> Clock </NavLink>
                <NavLink to="/hobby" className="button" activeclassname="true"> Hobby </NavLink>
            </div>
    }
    </>)
}

let mapStateToProps =(store)=>{
    return({user:store.userReducer.user})
}

export default connect(mapStateToProps)(header);
