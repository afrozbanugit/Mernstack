import React, { useEffect,useState } from "react";

const Denominations =(props)=>{

    let receivedamount = props.amount;
    console.log("amount ", receivedamount);
    let result = props.data;
    console.log("result ", result);
    let denominations =[2000,1000,500,100,50,20,10,5,2,1];
    let denominationCounts ={};
    let totalNotes = props.NumberOfNotes;
    let [objectAsArray,setObjectAsArray] = useState([]);

// 1 notes of Rs 1
return(<>
<div className="row">
    <button className="btn btn-primary" onClick={props.handlerfn}>Withdraw</button>
    <div> Amount to be drawn : {receivedamount}</div>
    {result && result.length >0 ?
    
        <ul>
            {result.map(([key, value]) => (
            <li key={key}>
                {value} notes of Rs.{key}
            </li>
            ))}
        </ul>
        : <>
        <div> No denominations to show</div>
        </>}
            <p>Number of Notes dispensed: {totalNotes}</p>
</div>
</>)


}
 export default Denominations;