import React,{useEffect, useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { AddUserToStore,SaveUserToDBUsingAxios,UpdateUserInfo,saveToDbUsingFetch } from "../../state/User/UserAction";
import HeaderComponent from "../../components/CommonComponents/HeaderComponent";
import { FetchHobbiesfromDB } from "../../state/hobby/HobbyAction";
import Button from "react-bootstrap/button"

let UserHookComponent2 =(props)=>{

let user = useSelector((store)=>{return store.userReducer.user})
let hobbylist = useSelector((store)=>store.HobbyReducer.hobbylist)
let dispatcher = useDispatch();

let [userName,setUserName] = useState(user.userName);
let [password,setPassword] = useState(user.password);
let [email,setEmail] = useState(user.email);
let [mobile,setMobile] = useState(user.mobile);
let [street,setStreet] = useState(user.street);
const [selectedValue, setSelectedValue] = useState('');
const [isLoading, setIsLoading] = useState(false);


useEffect(()=>{
    console.log("Inside useEffect of user component");
   /*  hobbylist && hobbylist.length <1 ? 
    dispatcher(FetchHobbiesfromDB())
    : " " */
    console.log("user ", user);    
    setIsLoading(true);
    },[])
    let onTextChange=(event)=>{
    
    const classlist =event.target.classList;
    if(classlist && classlist.contains("username")){
        setUserName(event.target.value)
    }else if(classlist && classlist.contains("pass")){
        setPassword(event.target.value)
    }else if(classlist && classlist.contains("street")){
        setStreet(event.target.value)
    }else if(classlist && classlist.contains("mobile")){
        setMobile(event.target.value)
    }else {
        setEmail(event.target.value)
    }
    event.preventDefault();
}

let loginUser=(event)=>{
        user={userName,password,email,mobile,street}        
        dispatcher(SaveUserToDBUsingAxios(user));
        event.preventDefault();
}

let onSaveUserInfo =()=>{
    const loggedInUser = user.userName;
    console.log("user Name ", loggedInUser);
    console.log("user ", user);
    if(user._id){ 
     //   console.log("Selected hobby ", selectedValue);
        user = {...user,hobby:selectedValue}
      //  console.log("user ", user);
        dispatcher(UpdateUserInfo(user));
    }else{
        alert("Please login before saving other details")
    }

}

return(<>
      <section className={"componentClass"}>
        <div className="form col-md-8">
        <div className="col-md-12">
             <b>User Name</b>
             <input type="text" className="form-control col-md-6 username" value={userName} 
                   name="username" placeholder="User Name" onChange={onTextChange} maxLength={40}/>
        </div>
        <div className="col-md-12">
            <b>Password</b>
             <input type="password" className="form-control col-md-6 pass" value={password} 
                    name="pass" placeholder="Password" onChange={onTextChange} maxLength={40}/>
        </div>
        <div className="col-md-12">
             <b>Street </b>
            <input type="text" className="form-control col-md-6 street" value={street} 
                    placeholder="Street Name" onChange={onTextChange} />
        </div>
        <div className="col-md-12">
             <b>Mobile </b>
            <input type="number" className="form-control col-md-6 mobile" value={mobile} 
                 placeholder="Mobile" maxLength="11" onChange={onTextChange} />
        </div>
        <div className="col-md-12">
             <b>Email </b>
            <input type="email" className="form-control col-md-6 email" value={email} 
                 placeholder="Email" maxLength="18" onChange={onTextChange} />
        </div>
        {hobbylist && hobbylist.length >0 ?  
            <>
            <b>Hobbies </b>
                <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                <option value="">Select an Option</option>
                {hobbylist.map((hobby,index)=>{
                    return <option key={index} value={hobby}>{hobby}</option>
                })}
                </select> 
                <p>Selected value: {selectedValue}</p>
                <Button onClick={onSaveUserInfo}> Update User Details</Button>
            </>            
        : " "}
            <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                value={"SignIn-Up"} onClick={loginUser}/>
     </div>
    </section>
 </>)
}

export default UserHookComponent2;

