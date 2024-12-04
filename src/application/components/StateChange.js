import React from "react";
import Header from "./Header";
//10. Make a state change, the state should be duplicate 
//and then stop it to call render method to improve efficiency.

export default class StateChange extends React.Component{
    constructor(props) {
        super(props);
        this.state = { count: 0 };
      }
    
      shouldComponentUpdate(nextProps, nextState) {
        // Prevent re-render if the state hasn't changed
        //After count becomes 1 it will not re-render
        return this.state.count !== nextState.count; 
      }
    
      handleClick = () => {
        this.setState(() => ({ count:1 }));
      };
    
      render() {
        console.log("Render called");
        return (
          <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.handleClick}>Increment</button>
          </div>
        );
      }
    
}