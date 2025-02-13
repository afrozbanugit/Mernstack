import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import CartComponent from '../Cart/CartComponent';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyPdfDocument from '../PDF Generator/MyPdfDocument';
import {SaveOrderToDB} from '../../state/orders/OrderAction';
import { RemoveNotification } from '../../state/Notification/NotificationAction';
let CheckoutComponent = (props)=>{

    let [payment,setPayment] = useState(false);
    let user = useSelector(store => store.userReducer.user);
    let cartList = useSelector(store => store.CartReducer);
    let notificationCount =useSelector(store=>store.NotificationReducer.notificationCount);
    let dispatcher = useDispatch();
    let location = useLocation();
    const orderData = location.state;

    console.log("Order data ", orderData);
    console.log("User from checkout component", user);
    console.log("Cartlist from check out component",cartList);
    console.log("payment ",payment);

    const orderDetails = {  date:new Date().toLocaleDateString(),
                        totalAmount: orderData.totalAmount, 
                        quantity:orderData.count,
                        cartlist:orderData.cartlist};
                        console.log("orderDetails ", orderDetails);
    useEffect(()=>{
        //My public key here
        emailjs.init("3HhT0xCPW2u4mUOnI")
    },[])
    const onMakePayment =()=>{
        setPayment({payment:true});
        let order = {userId : user._id,
                    date: new Date(),
                    products : cartList,
                    total:100
        }
        console.log("order ", order);
        dispatcher(SaveOrderToDB(order));        
        dispatcher(RemoveNotification({message:" item in the cart for checkout", count: notificationCount-2}));
        sendEmail(order,user);
    }

    const sendEmail=async(order,user)=>{
        const serviceId = "service_9u30aon";
        const templateId = "template_a3bv12x";
        try {
            
            await emailjs.send(serviceId, templateId, {
                order_id: order._id,
                to_name: user.userName.toUpperCase(),
                message: "Order placed on " + order.date +".It was pleasure doing business with you."
            });
            alert("Email successfully sent! Check inbox");
          } catch (error) {
            console.log(error);
          } finally {
            console.log("Finally block");
          }
    }

    return(<>
   {
    payment ? <>
        <div>
            <h5>Payment Page</h5>
            <p>"Thankyou for the payment, your items under process!"</p>
            <div>
                <h6>Download Your Order Details below</h6>
                <PDFDownloadLink document={<MyPdfDocument {...orderDetails} />} fileName="Orderdetails.pdf">
                    {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
                </PDFDownloadLink>
            </div>
        </div>
    </> :
   
    <div>
        <div style={{border :'1px solid grey'}} className='mb-2 col-6'>
            <h6>Please Confirm below details :</h6>
                <p>Username : {user.userName}</p>
                <p>Email : {user.email}</p>
                <p>Address : {user.street}</p>
                <p>Phone : {user.mobile}</p>
        </div>
        
        <br></br>
        <div style={{border :'1px solid grey'}} className='mb-2 col-6'>
            <CartComponent readOnly={true}/>
        </div>
        <button onClick={onMakePayment}> Make Payment</button>
    </div>
    }
    </>)

}
export default CheckoutComponent;