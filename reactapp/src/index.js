
import React from "react";
import * as ReactDOM from "react-dom/client";
import App3 from "./application/app3";
import { Provider } from "react-redux";
import  store  from "./application/state/store";

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

//bootstrapping react application in root element of index.html
root.render(  //first time when our virtual dom is created and loads
       <Provider store={store}>
        <App3/>
        </Provider>   
)