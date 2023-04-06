import React, { useState } from 'react';
import calculate from '../logic/calculate';

const obj = {
  total: 0,
  next: '',
  operation: '',
};

function Keyboard() {
  const [data, setData] = useState(obj);

  const handleClick = (e) => {
    setData(calculate(data, e.target.textContent));
  };

  return (
    <>
      <div className="container">
        <div className="ContainerText">
          <h2>Let&apos;s Do Some Maths</h2>
        </div>

        <div className="displayContainer">
          <div className="display">
            <p>
              {data.total}
              {' '}
              {data.operation}
              {' '}
              {data.next}
            </p>
          </div>

          <div className="keypad">
            <button type="button" onClick={handleClick}>AC</button>
            <button type="button" onClick={handleClick}>+/-</button>
            <button type="button" onClick={handleClick}>%</button>
            <button type="button" className="operator" onClick={handleClick}>&divide;</button>
            <button type="button" onClick={handleClick}>7</button>
            <button type="button" onClick={handleClick}>8</button>
            <button type="button" onClick={handleClick}>9</button>
            <button type="button" className="operator" onClick={handleClick}>x</button>
            <button type="button" onClick={handleClick}>4</button>
            <button type="button" onClick={handleClick}>5</button>
            <button type="button" onClick={handleClick}>6</button>
            <button type="button" className="operator" onClick={handleClick}>-</button>
            <button type="button" onClick={handleClick}>1</button>
            <button type="button" onClick={handleClick}>2</button>
            <button type="button" onClick={handleClick}>3</button>
            <button type="button" className="operator" onClick={handleClick}>+</button>
            <button type="button" className="spanTwo" onClick={handleClick}>0</button>
            <button type="button" onClick={handleClick}>.</button>
            <button type="button" className="operator" onClick={handleClick}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Keyboard;
