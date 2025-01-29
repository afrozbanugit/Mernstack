import React,{useState} from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image"
import Button from 'react-bootstrap/Button';
import couponImg from '../../images/coupon.jpg'
import { useDispatch, useSelector } from "react-redux";
import {AddCouponCodeToStore} from '../../state/Coupon/CouponAction'

const CouponComponent =()=>{

   const couponCode = useSelector(store=>store.CouponReducer.couponCode);
   const dispatcher = useDispatch();
   console.log("Coupon code from store ",couponCode);

   const onGenerateCouponCode =()=>{
    let newCode =Math.random().toString(36).slice(2,11);
    dispatcher(AddCouponCodeToStore(newCode))
   }
    return(<>
    <Card style={{ width: '18rem' }}>
     {/*  <Card.Img variant="top" src={couponImg} /> */}
      <Image src={couponImg} fluid width={400} height={100} style={{margin:0}}/>
      <Card.Body>
        <Card.Title>Today's Deals :</Card.Title>
        <Card.Text>
          Get 10% off on all Electronic Items.
        </Card.Text>
        <Button variant="primary" 
            onClick={onGenerateCouponCode}>Generate Coupon Code</Button>
            <p>{couponCode}</p>
      </Card.Body>
    </Card>
    </>)
}

export default CouponComponent;