import React, { useState } from 'react';

const Calculator = ({ themeClass }) => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClick = (button) => {
    if (displayValue === '0') {
      setDisplayValue(button);
    } else if (button === 'C') {
      setDisplayValue('0');
    } else if (button === 'DEL') {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue(displayValue + button);
    }
  };

  const roundToThreeDecimals = (value) => {
    return Math.round(value * 1000) / 1000;
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      const roundedResult = roundToThreeDecimals(result);
      setDisplayValue(roundedResult.toLocaleString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
  };

  return (
    <div className={`calculator ${themeClass}`}>
      <div className="display">
        {displayValue}
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className='del' onClick={() => handleClick('DEL')}>DEL</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>x</button>
      </div>
      <div className='buttons-reset-sum'>
        <button className='del reset' onClick={handleClear}>Reset</button>
        <button className='sum reset' onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
