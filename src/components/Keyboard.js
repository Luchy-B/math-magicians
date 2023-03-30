import React from 'react';

function Keyboard() {
  return (
    <div>
      <div className="keypad">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="operator">&divide;</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="operator">&times;</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="operator">&ndash;</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="operator">+</button>
        <button type="button" className="spanTwo">0</button>
        <button type="button">.</button>
        <button type="button" className="operator">=</button>
      </div>
    </div>
  );
}
export default Keyboard;
