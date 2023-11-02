import React from "react";

function Label({ labelFor, title }) {
  return (
    <label htmlFor={labelFor} className="text-gray-500">
      {title}
    </label>
  );
}

export default Label;
