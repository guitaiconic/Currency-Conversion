import React from "react";

const ConvertedAmount = ({ converted, convertedAmount, toCur }) => {
  return (
    <div className="result">
      <h2>Converted Amount:</h2>
      {converted && (
        <p>
          {convertedAmount} {toCur}
        </p>
      )}
    </div>
  );
};

export default ConvertedAmount;
