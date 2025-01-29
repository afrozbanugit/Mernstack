import React, { useRef, useState } from "react";

export default class CountryForm extends React.Component{

    constructor(props){
        super(props);
        this.state={countryName:"default",capital:"default",currency:"default"}
        this.inputNameRef = React.createRef();
        this.inputCapitalRef = React.createRef();
        this.inputCurrencyRef = React.createRef();
    }

    
    saveData = (event)=>{
        
        let name =this.inputNameRef.current.value;
        let cap = this.inputCapitalRef.current.value;
        let curr=this.inputCurrencyRef.current.value;
        console.log(name,cap,curr);
      //  this.props.handleFormSubmit(this.state.capital);
        this.setState({countryName:name,capital:cap,currency:curr});  
      //  console.log(this.state.countryName);
        event.preventDefault();
     }

     componentDidUpdate(currentprops,prevState){
        console.log("In component did update",prevState);
        console.log(this.state);
        this.props.handleFormSubmit(this.state.capital);
     }

    render(){
        return(<>
            <h2>Enter Country details</h2>
            <form className="form-control col-6" onSubmit={this.saveData}>
                <label>Country name :</label><input type="text" ref={this.inputNameRef} 
                        className="form-control col-6" name="country"/>
                <br/>
                <label>Capital :</label>
                <input type="text" ref={this.inputCapitalRef}  name="capital" />
                <br/>
                <label>currency :</label>
                <input type="text" ref={this.inputCurrencyRef} name="currency" />
                <br/>
                <button type="submit">Save</button>
            </form>
            <h3>Entered details are</h3>
            <p>{this.state.countryName}</p>
            </>)
    }
   

}