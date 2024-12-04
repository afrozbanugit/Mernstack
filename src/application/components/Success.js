import React from "react";
import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";
import Header from "./Header";
//3. create a class component named - Success and show some quotes (messages) on success in it
export default class Success extends React.Component{
    constructor(props){
        super(props);
        this.state={message:""}
    }

    onGetMessage=(message)=>{
        console.log(message);
        this.setState({message:message});
    }
    render(){
        let quotesList =["Optimism is the Faith that leads to Achievement",
                        "The future belongs to those who believe in the beauty of dreams",
                        "A little progress each day adds up to big Results",
                        "It doesnt matter what others are doing, it matters what you are doing"
        ]

        return(<>
            <Header/>
            <h3>Success Quotes</h3>
            {quotesList.map((quote,index)=>{
                return <h6 key={index}>{quote}</h6>
            })}
            <SuccessChild name="Liam" address="123 xyz Ave" successStory={<SuccessStory messageHandlerfn={this.onGetMessage}/>}/>
            <p>Message from Success Story comp: {this.state.message}</p>
        </>)
    }

}