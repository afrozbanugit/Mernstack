import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./app.css";
import Header from "./components/CommonComponents/HeaderComponent";
import Footer from "./components/CommonComponents/FooterComponent";
import Home from "./components/CommonComponents/HomeComponent";
import UserHookComponent2 from "./ApplicationComponents/User/UserHookComponent2";
import StudentComponent from "./ApplicationComponents/Student/StudentComponent";
import ProductComponent from "./ApplicationComponents/Product/ProductComponent";
import DisplayProducts from "./ApplicationComponents/Product/DisplayProduct";
import CartComponent from "./ApplicationComponents/Cart/CartComponent";
import CheckoutComponent from "./ApplicationComponents/Checkout/CheckoutComponent";
import CouponComponent from "./ApplicationComponents/Coupon/CouponComponent";
import { AboutComponent } from "./components/CommonComponents/AboutComponent";
import RecentOrdersComponent from "./ApplicationComponents/RecentOrders/RecentOrders";
import StarRating from "./ApplicationComponents/StarRating/StarRating";
import ClockComponent from "./components/CommonComponents/ClockComponent";
import Hobbies from "./ApplicationComponents/Hobby/Hobbies";


export default class App3 extends React.Component{
    constructor(){
        super();
        this.state={user:{name:"Default name",session:"Default Session"}}
    }
    
    
    render(){
        return(<>
        
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home user={this.state.user} />}/>
                    <Route path="home" element={<Home />}/>
                    {/* <Route path="login" element={<UserContainer />}/> */}
                    {/*<Route path="login" element={<UserComponent />}/> */}
                    <Route path="login" element={<UserHookComponent2 />}/>
                    <Route path="product" element={<ProductComponent/>}/>
                    <Route path="/displayProduct" element={<DisplayProducts/>}/>
                    <Route path="/cart" element={<CartComponent/>}/>
                    <Route path="/checkout" element={<CheckoutComponent/>} />
                    <Route path="/coupon" element={<CouponComponent/>} />
                    <Route path="/about" element={<AboutComponent/>} />
                    <Route path="/recentorders" element={<RecentOrdersComponent/>}/>
                    <Route path="/rating" element={<StarRating/>}/>
                    <Route path="/clock" element={<ClockComponent/>}/>
                    <Route path="/hobby" element={<Hobbies/>}/>
                </Routes>            
            </BrowserRouter>
            <Footer/>
        </>)
    }


}