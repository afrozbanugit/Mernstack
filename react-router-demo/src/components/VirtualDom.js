import React from "react";
import Header from "./CommonComponents/Header";

export default function PropTypes(){
    return(<>
        <Header/>
        <h1>Virtual Dom Page</h1>
        <ol>
            <li>The virtual DOM is a lightweight representation of the actual DOM (Document Object Model)</li>
            <li>React creates a virtual DOM tree that mirrors the structure of your actual DOM. Each element
                 in your JSX code corresponds to a node in this virtual DOM.</li>
            <li>When you update a component's state or props, React creates a new virtual DOM tree reflecting the changes.</li>
            <li>React then compares the new virtual DOM tree with the previous one also known as diffing algorithm</li>
            <li>React applies the minimal necessary changes to the actual DOM to reflect the changes in the virtual DOM</li>
        </ol>
    </>)
}
