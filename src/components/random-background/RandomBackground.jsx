import { useState } from 'react';
import randomColor from 'randomcolor';

const RandomBackground = () => {
  const [bgColor, setBgColor] = useState(randomColor());

  const changeBackground = () => {
    setBgColor(randomColor());
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        onClick={changeBackground}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Change Background Color
      </button>
    </div>
  );
};

export default RandomBackground;
