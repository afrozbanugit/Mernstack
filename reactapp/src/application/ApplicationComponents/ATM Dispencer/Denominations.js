import React, { useEffect,useState } from "react";

const Denominations =(props)=>{

    let receivedamount = props.amount;
    console.log("amount ", receivedamount);
    let result = props.data;
    console.log("result ", result);
    let denominations =[2000,1000,500,100,50,20,10,5,2,1];
    let denominationCounts ={};
 //   const [result,setResult] = useState();
    let [objectAsArray,setObjectAsArray] = useState([]);

  /*   if(receivedamount >0){
    let remainingAmount = receivedamount;
    for(const d of denominations){
        console.log("d ",d)
        denominationCounts[d] = Math.floor(remainingAmount / d);
        console.log("denominationCounts ",denominationCounts);
        remainingAmount %= d;
        console.log("Remaining amount ", remainingAmount); */
    // }
    // let objArr = Object.entries(denominationCounts);
  //   let [objectAsArray,setObjectAsArray] = useState({objArr:objArr});
   //  console.log(objArr);
 //   setResult({denominationCounts})
 //   console.log("Now result is ",result);
 //   setObjectAsArray(objArr);
  //  console.log("ObjectAs Array ", objectAsArray);
  //  receivedamount =0;
   // }

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

</div>
</>)


}
 export default Denominations;