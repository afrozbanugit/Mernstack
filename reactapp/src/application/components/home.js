import React from "react";
import Car from "./car";
export default class home extends React.Component{
    constructor(props){
        super(props);
        this.state={id:1,
            name:"Siera"
            }           
    }
    eventHandelerfn= ()=>{
        console.log("Event handler function");
        this.setState({name:"Siera"});
    }
    render(){
        let carList=[{brand:'Honda',id:1},
            {brand:'Toytota',id:2},
            {brand:'Tesla',id:3}
        ]
        return(<>
            <button className="btn btn-primary" onClick={()=>{
                this.setState({name:"Duncan"})
            }}>Change State</button>
            <h3 >{this.state.name}</h3>
            <button className="btn btn-primary" onClick={this.eventHandelerfn}>Change Again!</button>
            {carList.map((car)=>{
                <Car id={car.id} brand={car.brand}></Car>
            })}
            
        </>)

    }
    
}