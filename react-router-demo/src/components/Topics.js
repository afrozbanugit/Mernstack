import React from "react";
import Header from "./CommonComponents/Header";
import { Link } from "react-router-dom";
export default class Topics extends React.Component{

    constructor(props){
        super(props);
        console.log("Constructor is first called in creation phase");
        this.state={userId:1,name:"John",city:"New York"}
    }

    componentDidMount(){
        console.log("Component did mount is called only once after render in the creation phase");
        //Also this will not be called for after any other state changes where as componentDidUpdate will be called
      //  this.setState({city:"Seattle"})
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("Component did update is called during every state change");
        console.log("Component did update is part of update phase");
        console.log("Prev state " , prevState);
        console.log("Current state ", this.state);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate method is called ")
        console.log("nextPops ", nextProps)
        console.log("nextState ", nextState)

        if (this.state.city == nextState.city ) {
            return false // should not call render method to create virtual dom - as no change in city
        } else {
            return true // keep calling render method     
        }
    }
    //This is the order in update phase
    // 1.shouldComponentUpdate
    // 2.getSnapshotBeforeUpdate
    // 3.componentDidUpdate
    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate is called just before componentdidUpdate lifecycle method is called");
        
        return {
            prevState,
            prevProps
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount is called during the destruction phase of a component")
        //When a component is removed from dom this is called
    }

    changeCity=()=>{
        this.setState({id:2,name:"Keith",city:"NewYork"})
    }

    onForceUpdate=()=>{
        this.state.userId=200
        this.forceUpdate();
        console.log("Inside force update - calls render method directly and skips shouldcomponentupdate method call"); // Not recommended
        console.log("current state ", this.state);
    }
    render(){
        console.log("Render is called ");
        return(<>
            <Header/>
            <h1>Topic Info</h1>
            <h3>Logged in user is {this.state.name} from {this.state.city}</h3>
            <ul>
                <li><Link to="/react">React</Link></li>
                <li><Link to="/proptypes">PropTypes</Link></li>
                <li><Link to="/virtualDom">Virtual Dom</Link></li>
                <li><Link to="/router">Router</Link></li>
            </ul>
            <button className="btn btn-primary" onClick={this.changeCity}>Change User Details</button>
            <button className="btn btn-primary" onClick={this.onForceUpdate}>Force Update</button>
        </>)

    }
    
}