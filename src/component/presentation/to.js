import React from "react";

const To = ({ toCur, onSetToCur }) => {
  return (
    <div className="input-group">
      <label>To</label>
      <select value={toCur} onChange={(e) => onSetToCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="INR">INR</option>
        <option value="NGN">NGN</option>
      </select>
    </div>
  );
};

export default To;
