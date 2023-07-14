import React, { useState } from "react";
import "./addUser.css"
const UserData = ( {onAddValue} ) => {
  const [inputValue, setInputValue] = useState("");
  
  // console.log(printValue);
  // console.log(inputValue);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onAddValue(inputValue);
    setInputValue("");
  };

 
  return (
    <div className="listContainer">
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter data" className="addInput"/>
      <button onClick={handleSubmit} className="addButton">Submit</button>      
    </div>
  );
  
}

export default UserData;
