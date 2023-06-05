import React, { useState } from "react";

const UserData = (  ) => {
  const [inputValue, setInputValue] = useState("");
  const [printValue, setPrintValue] = useState([]);
  
  console.log(printValue);
  console.log(inputValue);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setPrintValue([...printValue, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter data" />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {printValue.map((value, index) => (
          <div key={index}>{value}</div>
        
        ))}
      </div>
      
    </>
  );
  
}

export default UserData;
