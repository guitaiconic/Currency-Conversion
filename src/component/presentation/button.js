import React from "react";

const button = ({ converter }) => {
  return (
    <button className="convert-btn" onClick={converter}>
      Convert
    </button>
  );
};

export default button;
