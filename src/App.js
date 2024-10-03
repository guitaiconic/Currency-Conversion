import React, { useState } from "react";
import Logo from "./component/presentation/logo";
import Amount from "./component/state/amount";
import From from "./component/presentation/from";
import To from "./component/presentation/to";
import Button from "./component/presentation/button";
import ConvertedAmount from "./component/presentation/ConvertedAmount";

function App() {
  const [toCur, setToCur] = useState("NGN");
  const [fromCur, setFromCur] = useState("GBP");
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
        setConvertedAmount(converted);
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
      <To toCur={toCur} onSetToCur={setToCur} />
      <Button converter={converter} />

      <ConvertedAmount
        convertedAmount={convertedAmount}
        toCur={toCur}
        converted={converted}
      />
    </div>
  );
}

export default App;
