import React, { useEffect, useRef, useState } from "react";

export default function CountryForm(props){
const[country,setCountry] = useState({countryName:"",capital:"",currency:""})

    const inputNameRef = useRef();
    const inputCapitalRef = useRef();
    const inputCurrencyRef = useRef();
     let saveData = (event)=>{
        
        let cName =inputNameRef.current.value;
        let cCapital = inputCapitalRef.current.value;
        let cCurrency=inputCurrencyRef.current.value;
        setCountry({countryName:cName,capital:cCapital,currency:cCurrency});
        
     //   props.handleFormSubmit(country);
        console.log(country);
        event.preventDefault();
     }
     useEffect(()=>{
        console.log("Inside useEffect ",country);
        props.onSubmit(country.capital);
     })


    return(<>
        <h2>Enter Country details</h2>
        <form className="form-control col-6" onSubmit={saveData}>
            <label>Country name :</label><input type="text" ref={inputNameRef} 
                    className="form-control col-6" name="country"/>
            <br/>
            <label>Capital :</label>
            <input type="text" ref={inputCapitalRef}  name="capital" />
            <br/>
            <label>currency :</label>
            <input type="text" ref={inputCurrencyRef} name="currency" />
            <br/>
            <button type="submit">Save</button>
            
        </form>
        <h4>Child component</h4>
        <p>Country Name: {country.countryName}</p>
        <p>Country Capital: {country.capital}</p>
        <p>Country currency: {country.currency}</p>
        </>)

}