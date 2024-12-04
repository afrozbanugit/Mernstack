//6. create UserSignIn component using uncontrolled way, should be class component
import React from "react";
import Header from "./Header";
export default class UserSignin extends React.Component {
    constructor(props){
        super(props);
        this.loginNameRef = React.createRef();
        this.loginPwdRef= React.createRef();
        this.state={userName:"",password:""}
    }
    onSubmitHandler=()=>{
        let name=this.loginNameRef.current.value;
        let pwd=this.loginPwdRef.current.value;
        this.setState({userName:name,password:pwd});
        event.preventDefault();
        console.log(this.state.userName);
    }

    componentDidUpdate(prevProps,prevState){
        console.log(prevState);
        console.log(this.state.userName);
    }
    render(){        
        return(<>  
        <Header/>  
        <h4>User Details UserName: {this.state.userName} and password: {this.state.password}</h4>
        <div className="container">
		    <div className="row justify-content-center">
            <div className="col-4">
            <form onSubmit={this.onSubmitHandler}>
                <div className="mb-3">
                    <label>User Name</label>
                    <input type="text" className="form-control" ref={this.loginNameRef} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" ref={this.loginPwdRef}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                </form>
                </div>
                </div>
                </div>
                
        </>)
    }
}