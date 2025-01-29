import React from "react";

export default class Denominations2 extends React.Component{

    constructor(props){
        super(props);
        this.state= {resultArr:this.props.data.denominationCounts,
                    objectAsArray:Object.entries(this.props.data.denominationCounts)
        };
        console.log("this.props ",this.props)
        console.log("Result array ",this.state.resultArr);
        this.denomArray = this.state.resultArr;
        console.log("Denom Array ", this.denomArray);
      //  this.objectAsArray = Object.entries(this.denomArray);
        console.log("Object As Array ", this.state.objectAsArray);
        /* for(const[k,v] in entries){
        console.log("key ", k);
        console.log("value ", v);
        this.resultArr.push([k,v]);
      //  setResultArr(...resultArr,{k:denominationCounts[k]});
    } */
    }

    componentDidMount(){
        console.log("Inside component did mount")
      //  this.setState({objectAsArray:Object.entries(this.denomArray)})
      console.log("this.denomArray ",this.denomArray);
    }

    componentDidUpdate(){
        console.log("This method gets called after state or prop gets updated and component is rendered");
    //    this.setState({resultArr:this.props.data})
        console.log("result arr in component did update ", this.state.resultArr);
     //   this.setState({objectAsArray:Object.entries(this.state.resultArr)})
     //   const objectAsArray = Object.entries(this.state.resultArr);
        
        
    }


    render(){
    
   // console.log("Inside render ", this.state.objectAsArray);
    return(<>
    <button className="btn btn-primary" onClick={this.props.handlerfn}>Withdraw</button>
    {this.state.objectAsArray && this.state.objectAsArray.length >0 ?
        <ul>
            {this.state.objectAsArray.map(([key, value]) => (
            <li key={key}>
                {value} notes of Rs.{key}
            </li>
            ))}
        </ul>
        : <>
        <div> No denominations to show</div>
        </>}
        </>)
    }
}