import React, { useState } from 'react';
import Keyboard from './Keyboard';

const Calculator = () => {
  const [data] = useState('');
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={data} />
        </form>
        <Keyboard />
      </div>
    </>
  );
};
export default Calculator;
