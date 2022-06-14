import React from "react";

const Input = ({ placeholderText="Input Task Here...", ...props }) => {
  return (
    <input
          style={{
            width:330
          }}
          type="text"
          placeholder={placeholderText}
          {...props}
        />
    
  );
};


export default Input;