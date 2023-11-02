import React from "react";

function Errors({ errors }) {
  return (
    <div className="text-red-600 text-center text-sm">{errors}</div>
  );
}

export default Errors;
