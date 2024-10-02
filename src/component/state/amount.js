const Amount = ({ amount, onSetAmount }) => {
  function handleAmountChange(e) {
    const value = Number(e.target.value);
    if (value >= 0) {
      onSetAmount(value);
    }
  }
  return (
    <div className="input-group">
      <label>Amount</label>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
      />
    </div>
  );
};

export default Amount;
