import React,{useEffect, useState}from "react";
import { FaUserCircle } from "react-icons/fa";
import { ToastContainer,toast } from "react-toastify";
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
import Button from "react-bootstrap/esm/Button";

const NotificationComponent =()=>{

    const notificationList = useSelector(store=>store.NotificationReducer.notificationList);
    const notificationCount =useSelector(store=>store.NotificationReducer.notificationCount);
    const navigate = useNavigate();
    let user = useSelector(store => store.userReducer.user);


    const showToastMessage = () => {
      console.log("user ", user._id);
      notificationList.forEach(notification=>{
        toast(notification, {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClick: () => {
            if(notification==="This Weeks Deals!"){
              navigate("/coupon");
            }
            if(user._id !=null){
              if(notification==="Purchase History"){
                navigate("/recentorders")
              }else if(notification==="Browse Products Catalogue"){
                navigate("/displayProduct")
              }else if(notification.includes("cart")){
                navigate("/cart")
              }
            }else{
              alert("Please sign in go see more details!")
            }
           toast.dismiss();  
          } 
          });
      })
       
      };

    const iconStyle = {
        position: 'absolute',
        top: '50px',
        right: '50px',
        zIndex: 10,
        cursor: 'pointer',
      };
    let logout =()=>{
      localStorage.removeItem("jwt");
      console.log("Logged out successfully!");
      window.location.href = "/login";
    }

    return(<>    
        <div style={iconStyle}>
        <Button variant="outline-dark" onClick={logout}>Logout</Button>
        <FaUserCircle size={25} color="brown" onClick={showToastMessage} />
        {notificationCount !=0 ? 
        <span style={{ position: "absolute",color:"brown",fontSize:"small" }}>{notificationCount}</span> 
        : " "}
                       
        <ToastContainer
            position="top-right"
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
      </div>
    </>)
}

export default NotificationComponent;