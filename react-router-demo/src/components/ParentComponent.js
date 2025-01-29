import React,{useState} from "react";
import CountryForm2 from "./CountryForm2";
import CountryForm from "./CountryForm";

export default function ParentComponent(){

    const [c,setC] =useState("");

    let showCountryDetails =(capital)=>{
        console.log(capital); 
        setC(capital);
    }
        return(<>
        {/* <CountryForm2 handleFormSubmit={showCountryDetails}/> */}  
        <CountryForm onSubmit={showCountryDetails}/>      
        <p>Capital Name: {c}</p>
        </>);
}
