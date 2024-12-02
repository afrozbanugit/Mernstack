import React from "react";
import Header from "./CommonComponents/Header";

export default function Router(){
    return(<>
    <Header/>
        <h1>Router Page</h1>
        <ol>
            <li>It allows you to manage navigation in your app by defining
                 routes that connect the URL paths to specific components.</li>
                 <li>With React router we can go to a new url without page refresh</li>
                 <li>The useNavigate hook can be used to navigate based on user action or programmatically</li>
                 <li>the useParams hook is used to transfer data via url to components dynamically</li>
                 <li>Link and Navlink creates links using which we can navigate, Navlink has extra advantage
                    of adding custom styles when user clicks or hovers over the element using activeClassName and activeStyle
                 </li>
        </ol>
    </>)
}