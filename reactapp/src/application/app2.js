import React from "react";
import './app.css'
import HomeApp from "./components/home"
let employeeList=[{name:'JJ',department:'IT'},
    {name:'Aila',department:'HR'},
    {name:'Summer',department:'Training'},
    {name:'Jake',department:'Physicals'}
]
function AppComponent(){

    let styleObj={color:"red",backgroundColor:"yellow"};
    console.log("EMployee list" + employeeList.length);

    return (<>
    <h2 style={{color:"blue",backgroundColor:"midnightblue"}}>My first component</h2>
    <h3 style={styleObj}>Style can be applied as an object also</h3>
    <ul>
     {employeeList.map((emp,index)=>{ return <li key={index}><h3>{emp.name} is in {emp.department}</h3></li>
        })}
        </ul>
        <HomeApp></HomeApp>
    </>) ;
    
}

export default AppComponent;