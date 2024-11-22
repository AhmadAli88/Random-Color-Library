import { useState } from 'react';
import randomColor from 'randomcolor';

const OriginalRandomColorComponent = () => {
  const [color, setColor] = useState(randomColor());

  const changeColor = () => {
    setColor(randomColor());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ color: color }}>This is a Random Color</h2>
      <button onClick={changeColor} style={{ padding: '10px', marginTop: '20px' }}>
        Change Color
      </button>
    </div>
  );
};

export default OriginalRandomColorComponent;
