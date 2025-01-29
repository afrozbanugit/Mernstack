import React from "react";
import Car2 from "./car2";
import Bike from "./Bike";

export default class Car extends React.Component{
    constructor(props){
         super(props);
         this.state={id:1,name:'Camry',show:true}
    }
    changeBrand=()=>{
        this.setState({name:"Corolla"})
        console.log("Current state " + this.state);
    };
    render(){
        return(<>
            <p>Our car is {this.props.brand}</p>            
            {this.state.show? <p>It is {this.state.name} and id is {this.state.id}</p> : null}
            <button onClick={this.changeBrand}>Change brand</button>
            <Bike bikeno={this.props.bikeno}/>
        </>)

    }
}