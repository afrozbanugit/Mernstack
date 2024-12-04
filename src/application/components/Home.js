import React,{useState} from "react";
import Header from "./Header";

export default function Home(){
    const[name,setName]=useState("John");
    let changeName=(event)=>{
        setName(event.target.value);
    }
    //2. how react renders dom in conservative manner - explain
  /*   In the below example react saves the state value and whenever there is a change in the state,
    it compares it to the previous state in the virtual dom by using diffing algorithm. React re renders
    the component in the actual dom when it find the difference. */
    return(<>
      <Header/>
        <p>Name is : {name}</p>
        <label>Enter new name </label><input type="text" value={name} onChange={changeName}/> 
        <div style={{ textAlign: 'left' }}>How Virtual Dom works?        
        <ol>
            <li>The virtual DOM is a lightweight representation of the actual DOM </li>
            <li>React creates a virtual DOM tree that mirrors the structure of your actual DOM.</li>
            <li>When you update a component's state or props, React creates a new virtual DOM tree reflecting the changes.</li>
            <li>React then compares the new virtual DOM tree with the previous one also known as diffing algorithm</li>
            <li>React applies the minimal necessary changes to the actual DOM to reflect the changes in the virtual DOM</li>
        </ol>
        </div>
        </>)
}