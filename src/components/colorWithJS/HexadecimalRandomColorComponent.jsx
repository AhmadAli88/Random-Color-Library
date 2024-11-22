import { useState } from 'react';

// Function to generate random hex color
const generateRandomColor = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const RandomColorComponent = () => {
  const [color, setColor] = useState(generateRandomColor);

  const changeColor = () => {
    setColor(generateRandomColor());
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

export default RandomColorComponent;
