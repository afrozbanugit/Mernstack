import React, { useRef, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import store from "../../state/store";
import HeaderComponent from "../../components/CommonComponents/HeaderComponent";
import {AddUserToStore} from "../../state/User/UserAction"

export default function UserHookComponent(props){

    //to subscribe we need to implement - mapStateToProps and its equivalent hook is useSelector
    let user = useSelector((store)=>store.userReducer.user)
    //console.log(user)

    //to make component a publisher we need to implement mapDispatch to props - useDispatch
    let dispatcher = useDispatch();

    let userNameRef = useRef(null);
    let passwordRef = useRef(null);
    let sessionRef = useRef(null);
    let phoneRef = useRef(null);

     //useEffect - checks for any data change or UI interaction and allows to call for re-render on state change
    //useEffect - is used to implement three life cycle methods <shouldComponentUpdate, componentDidMount, componentWillUnmount>
    //componentDidMount - life cycle method allows us to access html and setdata
     useEffect(()=>{
         userName.current.value = user.userName;

         //returning a call back works as destructure life cycle method
         return ()=>{
             //this function acts as component will unmount
             console.log("Component Unmounted")
         }
     },[]) //when we set [] or any array this initializes the state values and userEffect acts as componentDidMount

    let handleSignInUp=(event)=>{
        let username = userNameRef.current.value;
        let pass= passwordRef.current.value;
        let session = sessionRef.current.value;
        let mobile = phoneRef.current.value;
        let user ={userName:username,password:pass,session:session,mobile:mobile}
        alert(JSON.stringify(user))
        dispatcher(AddUserToStore(user))
        event.preventDefault();
    }
    return(<>
    <HeaderComponent/>
    <div class="row g-3 align-items-center justify-content-center">
             <form className="col-12 ">
             <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={userNameRef}
                    placeholder="Please enter user name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} ref={passwordRef}
                    placeholder="Please enter password" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Session :</b>
                    <input type="text" className={"form-control col-md-12"} ref={sessionRef}
                    placeholder="Please enter session name" maxLength={20} />
                </label>
                <br/>
                <label>
                    <b>Phone :</b>
                    <input type="number" className={"form-control col-md-12"} ref={phoneRef}
                    placeholder="Please enter mobile" maxLength={20} />
                </label>
                <br/>
                <br/>
                <input type="submit" onClick={handleSignInUp} className="btn btn-primary"
                        value="Sign In/Up"/>                    
             </form>
    </div>
            
        </>)
}