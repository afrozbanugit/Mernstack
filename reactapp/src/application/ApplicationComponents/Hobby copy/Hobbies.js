import React,{useState,useRef} from "react";
import { useDispatch } from "react-redux";
import { AddHobbyToDB } from "../../state/hobby/HobbyAction";

export default function Hobbies(){

    const [selectedItems, setSelectedItems] = useState([]);
    const dispatcher = useDispatch();
    const handleChange = (event) => {
    const value = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    }
    event.preventDefault();
  };

    const onSaveData =()=>{
        const hobbies = {hobbies:selectedItems};
        console.log(hobbies)
        console.log("dispatch hobby list");
        dispatcher(AddHobbyToDB(hobbies));
     //   event.preventDefault();
    }
  
    const options = [
      { name: 'ReadBook', label: 'Read Books' },
      { name: 'playgame', label: 'Play Board Games' },
      { name: 'watchmovies', label: 'Watch Movies' },
    ];
  
    return (
      <div>
        {options.map((option) => (
            <div key={option.name}>
          <label >
            
            <input
              type="checkbox"
              name={option.name}
              checked={selectedItems[option.name] || false}
              onChange={handleChange}
            />
            {option.label}            
          </label>
          
          </div>
          
        ))}
        <button onClick={onSaveData}>Save Data</button>
        </div>
    )
  
}
