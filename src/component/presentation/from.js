const From = ({ fromCur, onSetFromCur }) => {
  return (
    <div className="input-group">
      <label>From</label>
      <select value={fromCur} onChange={(e) => onSetFromCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="INR">INR</option>
        <option value="NGN">NGN</option>
      </select>
    </div>
  );
};

export default From;
