import React from "react";
import { connect } from "react-redux";
import { store } from "../../state/store";
import {AddUserToStore,saveToDbUsingFetch,SaveUserToDBUsingAxios} from "../../state/User/UserAction"
import HeaderComponent from "../../components/CommonComponents/HeaderComponent";

class UserComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName : props.user.userName, 
            password : props.user.password,
            street : props.user.street,
            mobile : props.user.mobile
        }
    }

    componentDidUpdate=(prevProps,prevState)=>{
       // console.log("ComponentDidUpdate - prevProps",prevProps);
     //   console.log("ComponentDidUpdate - prevState",prevState.userName);
    }

    onTextChange=(event)=>{
        console.log("Ontextchange called");        
        const value= event.target.value;
     //   console.log(value);
        const classlist =event.target.classList;
        if(classlist && classlist.contains("username")){
            this.setState({userName:value});            
        }else if(classlist && classlist.contains("pass")){
            this.setState({password:value}); 
        }else if(classlist && classlist.contains("street")){
            this.setState({street:value}); 
        }else {this.setState({mobile:value})}
        event.preventDefault();
    };

    loginUser=(event)=>{
        let newUser = this.state;
        alert("Logging in user is "+ JSON.stringify(newUser));
        //upon user action to login we send user to store
        //this.props.addUser(newUser);
        //Before adding to store we save it to database and on succssful save we will add it to store
        this.props.saveToDbUsingFetch(newUser);
        //Same can be achieved using Axios library as well
      //  this.props.SaveUserToDBUsingAxios(newUser);
        event.preventDefault();
    }

    render(){
       // console.log("Render method current state -",this.state);
      //  console.log("Render method current props -",this.props);
        return(<>
        <HeaderComponent/>
            <h1>User Login Page</h1>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>User Name</b>
                            <input type="text" className="form-control col-md-6 username" 
                                    value={this.state.userName} 
                                placeholder="User Name" onChange={this.onTextChange} maxLength={40}/>
            
                            </div>
                            <div className="col-md-12">
                                    <b>Password</b>
                                    <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                                    placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                            </div>
                            <div className="col-md-12">
                            <b>Street </b>
                                <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                                        placeholder="Street Name" onChange={this.onTextChange} />
                            </div>
                        
                            <div className="col-md-12">
                                <b>Mobile </b>
                                <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                                placeholder="Mobile" maxLength="11"
                                onChange={this.onTextChange} />
                            </div>

                            <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                                    value={"SignIn-Up"} 
                                    onClick={this.loginUser}/>
                                    
                        </div>
                </section>
        </>)
    }
    
}

const mapStateToProps = (store)=>{
    console.log("Map state to props ",store.userReducer.user);
    return({user:store.userReducer.user})
}

let mapDispatchToProps=(dispatch)=>{
    return({
        addUser:(user)=>{
            dispatch(AddUserToStore(user))},
        saveToDbUsingFetch:(user)=>{
            dispatch(saveToDbUsingFetch(user))},
        SaveUserToDBUsingAxios:(user)=>{
            dispatch(SaveUserToDBUsingAxios(user))
        }
})
}
export default connect(mapStateToProps,mapDispatchToProps)(UserComponent);