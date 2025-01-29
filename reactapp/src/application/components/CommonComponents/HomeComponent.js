import React, { Component, PureComponent } from "react";
import {PropTypes} from "prop-types";
import HeaderComponent from "./HeaderComponent";

//class based component - base class is component which defines many life cycle methods and state management
export default class Home extends Component {

//PureComponent - implements the should component update to do the deep comparison of each state and props for every state change
//export default class Home extends PureComponent {    
    //creation life cycle
    //initialization of state and variables - first to get called and only once
    constructor(props){
        //sending props back to super constructor so that updated values of props are in sync 
        super(props);
        this.state= {
            title : "Shop with below facilities"
        }
    }

    render(){
        return(<>
            <div className={"loadimage form"} style={{border:"1px solid red"}}>
                <h1>{this.state.title}</h1>
                <b className="feature">{"Product Feature's :"}</b>
                <ul>                     
                    <li>Sign up new users</li>
                    <li>Login existing users.</li>                
                    <li>Allow user's to add to cart.</li>
                    <li>Save the user's cart.</li>
                    <li>Checkout and pay for items.</li>
                    <li>Allow users to cancel the order.</li>
                    <li>Allow users to reorder the cart.</li>
                    <li>Add products/items to create product collection.</li>
                    <li>Allow users to give ratings to each product.</li>
                    <li>Have notifications on top right with logout.</li>
                </ul>
            </div>
        </>)
    }
       
}
        

//we should use default props to assign default values to the properties that we use in our component
// Home.defaultProps = {
//     user : {
//         session : "The Default Session Value",
//         address : "The Default Address"
//     }
// }


//proptypes are used to mark the properties we use in the component as required so that it shows waring if not present
//and can be fixed

// Home.propTypes = {
//     user : PropTypes.string.isRequired
// }