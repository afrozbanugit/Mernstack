import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartSummary from '../Cart/CartSummary';
import CartComponent from '../Cart/CartComponent';
import {SaveOrderToDB} from '../../state/orders/OrderAction';
let CheckoutComponent = (props)=>{

    let [payment,setPayment] = useState(false);
    let user = useSelector(store => store.userReducer.user);
    let cartList = useSelector(store => store.CartReducer);
    let dispatcher = useDispatch();

    console.log("User from checkout component", user);
    console.log("Cartlist from check out component",cartList);
    console.log("payment ",payment);

    const onMakePayment =()=>{
        setPayment({payment:true});
        let order = {userId : user._id,
                    date: new Date(),
                    products : cartList,
                    total:100
        }
        console.log("order ", order);
        dispatcher(SaveOrderToDB(order));
    }

    return(<>
   {
    payment ? <>
        <div>
            <h5>Payment Page</h5>
            <p>"Thankyou for the payment, your items under process!"</p>
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