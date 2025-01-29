import React,{useState,useEffect} from "react";
import ATMDispencer from "../../ApplicationComponents/ATM Dispencer/ATMDispencer";

const ClockComponent =(props)=>{

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setTime(new Date());
        }, 1000);

         // Cleanup so it doesnt build infinite calls
        return () => clearInterval(intervalId);
      }, []);
    
      const formattedTime = time.toLocaleTimeString();
    
      return (
        <>
            <div>
            {formattedTime}
            </div>
            <ATMDispencer/>
        </>
      );
}

export default ClockComponent;