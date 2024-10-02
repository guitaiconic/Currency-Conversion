import React, { useState } from "react";
import Logo from "./component/presentation/logo";
import Amount from "./component/state/amount";
import From from "./component/state/from";

function App() {
  const [toCur, setToCur] = useState("EUR");
  const [fromCur, setFromCur] = useState("NGN");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [converted, setConverted] = useState(false);
  const [amount, setAmount] = useState([]);

  const KEY = "cur_live_yN9vlX14NkZRfUasDIXzxUXInYI824hVny7KFU0E";

  const converter = async () => {
    try {
      // Fetch data from the API
      const res = await fetch(
        `https://api.currencyapi.com/v3/latest?apikey=${KEY}&base_currency=${fromCur}`
      );
      const data = await res.json();

      // Log the data structure to understand the API response
      console.log("API Response:", data);

      // Check if the 'toCur' currency exists in the response
      if (data.data && data.data[toCur]) {
        const rate = data.data[toCur].value;
        const converted = (amount * rate).toFixed(2); // Calculate conversion
        console.log(converted);
        setConverted(true); // Update converted amount
      } else {
        console.error(`Conversion rate for ${toCur} not found.`);
        setConvertedAmount("Error: Conversion rate not available.");
        setConverted(false);
      }
    } catch (error) {
      console.error("Error fetching conversion data:", error);
      setConvertedAmount("Error fetching conversion data.");
      setConverted(false);
    }
  };

  return (
    <div className="converter-container">
      <Logo />
      <Amount amount={amount} onSetAmount={setAmount} />
      <From fromCur={fromCur} onSetFromCur={setFromCur} />

      <div className="input-group">
        <label>To</label>
        <select value={toCur} onChange={(e) => setToCur(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
          <option value="NGN">NGN</option>
        </select>
      </div>
      <button className="convert-btn" onClick={converter}>
        Convert
      </button>
      <div className="result">
        <h2>Converted Amount:</h2>
        {converted && (
          <p>
            {convertedAmount} {toCur}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
