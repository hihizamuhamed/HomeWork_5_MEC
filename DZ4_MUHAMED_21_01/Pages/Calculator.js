import React, { useState } from 'react';
import { connect } from 'react-redux'
import { add, subtract, multiply, divide } from '../Pages/actions'

function Calculator(props) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const handleNumber1Change = (event) => {
    setNumber1(Number(event.target.value));
  };

  const handleNumber2Change = (event) => {
    setNumber2(Number(event.target.value));
  };

  const handleAddClick = () => {
    if (number1 && number2) {
      props.add(number1, number2);
    } else {
      alert('Одно или оба поля ввода пусты!');
    }
  };

  const handleSubtractClick = () => {
    if (number1 && number2) {
      props.subtract(number1, number2);
    } else {
      alert('Одно или оба поля ввода пусты!');
    }
  };

  const handleMultiplyClick = () => {
    if (number1 && number2) {
      props.multiply(number1, number2);
    } else {
      alert('Одно или оба поля ввода пусты!');
    }
  };

  const handleDivideClick = () => {
    if (number1 && number2) {
      props.divide(number1, number2);
    } else {
      alert('Одно или оба поля ввода пусты!');
    }
  };

  return (
    <div>
      <div>
        <input type="number" value={number1} onChange={handleNumber1Change} />
        <input type="number" value={number2} onChange={handleNumber2Change} />
      </div>
      <div>
        <button onClick={handleAddClick}>+</button>
        <button onClick={handleSubtractClick}>-</button>
        <button onClick={handleMultiplyClick}>*</button>
        <button onClick={handleDivideClick}>/</button>
      </div>
      <div>
        <p>РЕЗУЛЬТАТ: {props.result}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    result: state.result,
  };
};

const mapDispatchToProps = {
  add,
  subtract,
  multiply,
  divide,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
