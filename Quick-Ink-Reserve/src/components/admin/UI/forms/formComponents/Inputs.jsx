import React from "react";

function Inputs({ type, placeholder, name, value, handleChange, margined }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required
      className={`p-2 rounded-md w-2/3 bg-gray-300 ${margined ? "m-auto" : ""} ${
        value ? "text-black" : ""
      }`}
      value={value}
      onChange={handleChange}
    />
  );
}

export default Inputs;
