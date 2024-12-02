import React from "react";
import Header from "./CommonComponents/Header";

export default function PropTypes(){
    return(<>
        <Header/>
        <h1>PropType Page</h1>
        <ol>
            <li>PropTypes are simply a mechanism that ensures that the passed value is of the correct datatypenpm</li>
            <li>To add proptypes we add the library by npm install prop-types --save</li>
            <li>They are often used after the component ends and starts with the name of the component eg:Home.ropTypes</li>
            <li>PropTypes are also objects with a key and a value pair where the ‘key’ is the 
                name of the prop while the value represents the type</li>
               {/*  For eg:
                        Count.propTypes = {
                            name: PropTypes.string,
                            age: PropTypes.number,
                            address: PropTypes.object,
                            friends: PropTypes.array,
                            }; */}
            <li> If any value other data type is used as a value for props, it will show an error in the console</li>
            <li>We can chain any of the above with isRequired to make sure a warning is shown if the prop isn't provided</li>
             {/* name: PropTypes.string.isRequired, */}
             <li>We can also check if prop type is instance of a class like messages: PropTypes.instanceOf(Message)</li>
             <li>For advanced checking plz refer https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/</li>
        </ol>
    </>)
}