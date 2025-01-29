import React, { useEffect, useRef,useState } from "react";
import Denominations2 from "./Denominations2";

const ATMDispencer = ()=>{

const [withdrawlAmount, setwithdrawlAmount] = useState();
const amountRef = useRef();
const [IsAmountEntered,setIsAmountentered] = useState(false);
const [result,setResult] = useState();

const denominations =[2000,1000,500,100,50,20,10,5,2,1];
const denominationCounts ={};

let getUpdatedAmount=()=>{
    return result;
}

useEffect(()=>{
  //  setResult({denominationCounts});
    console.log("And result is ",result);
})

const onWithdraw=(evt)=>{
    const amount = amountRef.current.value;
    console.log("Amount to be withdrawn ",amount);
    setwithdrawlAmount(amount);
    amount && amount.length >0 ? setIsAmountentered(true) :""
    let remainingAmount = amount;
    for(const d of denominations){
        console.log("d ",d)
        denominationCounts[d] = Math.floor(remainingAmount / d);
    //    console.log("denominationCounts ",denominationCounts);
        remainingAmount %= d;
     //   console.log("Remaining amount ", remainingAmount);
        }
    setResult({denominationCounts})
    console.log("Now result is ",result);
    
    evt.preventDefault();
}


return(<>
<form className="form col-4">
<label>Enter Amount to withdraw: </label>
<input type="number" name="amount" ref={amountRef}/>
{/* <button className="btn btn-primary" onClick={onWithdraw}>Withdraw</button> */}
{/* <div> Amount to be drawn : {withdrawlAmount}</div> */}
<Denominations2 data={getUpdatedAmount()} handlerfn={onWithdraw} IsAmountEntered={IsAmountEntered}/>
   
</form>

</>)
}

export default ATMDispencer;