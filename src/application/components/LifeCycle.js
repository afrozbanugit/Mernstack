import React from "react";
import Header from "./Header";

////9. Create a class component and show all the life cycle hooks/methods
export default class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state={user:"JJ",id:"100",email:"jj@xyz.com"}
    }

    componentDidMount(){
        console.log("This is the 3rd method that gets called in creation phase after constructor and render method")
    }

    shouldComponentUpdate(prevState){
        console.log("This lifecycle method is in updation phase.IF this returns false component re-render will not happen");
        if(this.state.id==this.prevState.id){
            return false;
        }else return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("This lifecycle method runs after render but holds current value of DOM");
    }
    componentDidUpdate(){
        console.log("This method gets called after state or prop gets updated and component is rendered");
    }

    componentWillUnmount(){
        console.log("This is lifecycle method in destruction phase of component ie after a component is removed from DOM");
    }

    render(){
        console.log("Render is called when component is initially rendered and also after every state change");
        return(<>
        <Header/>
        <h3>Lifecycle methods</h3>
        <div style={{ textAlign: 'left' }}>Life Cycle Methods        
        <ol>
            <li>There are 3 phases of React Component </li>
            <li>A Component is initially created by calling the constructor method. </li>
            <li>Then it calls the render method, when the component is rendered in DOM and componentDidMount lifecycle method is called.</li>
            <li>ComponentDidMount can be a place to put our initial APIs</li>
            <li>When there is change in state or props through setState method, the component gets rerendered</li>
            <li>ShouldComponentUpdate lifecycle method can be used to check if component needs to be rendered again</li>
            <li>ComponentDidUpdate gets called after the component is rendered after a update. We have access to
                previousState,previousProps and snapshotobject returned from getSnapshotBeforeUpdate method
            </li>
            <li>ComponentWillUnmount is the lifecycle method where we can do any cleanup process like clearing timers when a component is removed from DOM</li>
        </ol>
        </div>
        </>)
    }
}