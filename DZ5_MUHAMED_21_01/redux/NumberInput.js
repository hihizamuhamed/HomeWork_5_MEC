import React, { useState } from "react";
import { connect } from "react-redux";
import { addNumber, clearList } from "./action";

const NumberInput = ({ addNumber, clearList }) => {
  const [number, setNumber] = useState("");

  const handleAddClick = () => {
    if (number !== "") {
      addNumber(parseInt(number));
      setNumber("");
    }
  };

  const handleClearClick = () => {
    clearList();
    setNumber("");
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleClearClick}>Clear</button>
    </div>
  );
};

export default connect(null, { addNumber, clearList })(NumberInput);
