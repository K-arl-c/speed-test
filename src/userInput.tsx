import React, { useState } from "react";
import './userInput.css'

const UserInput = ({ onUserType }) => {
 const [inputValue,setInputValue] = useState("");

  const handleInputChange = (event) => {
    const typedText = event.target.value; 
    if(typedText.endsWith(" ")){
        setInputValue("");
        onUserType(typedText);
    } else{
        setInputValue(typedText);
        onUserType(typedText);
    }
  };

  return (
    <input
      type="text"
      id="userInputBox"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Start typing..."
      autoFocus={true}
      onBlur={({ target }) => target.focus()}
    />
  );
};

export default UserInput;

