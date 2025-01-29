import React,{useState,useRef} from "react";
import { useDispatch } from "react-redux";
import { AddHobbyToDB } from "../../state/hobby/HobbyAction";

export default function Hobbies(){

    const dispatcher = useDispatch();
    const [hobbyname,setHobbyName] = useState("");
    
    const ontextChange=(event)=>{
      setHobbyName(event.target.value);
      event.preventDefault();
    }
    const onSaveData =(event)=>{
       // setHobbyName
       let hobby = hobbyname;
        console.log(hobby)
        const Hobby ={hobby};
        console.log("dispatch hobby list");
        dispatcher(AddHobbyToDB(Hobby));
        event.preventDefault();
    }
  
  
    return (
      <div>
        <input type="text" name="hobby" value={hobbyname} id="hobbyname" onChange={ontextChange}/>
        <label htmlFor="hobbyname">Enter your hobby : </label>
        <button onClick={onSaveData}>Save Data</button>
        </div>
    )
  
}
