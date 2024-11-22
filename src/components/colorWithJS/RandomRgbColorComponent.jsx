import  { useState } from 'react';

// Function to generate random rgb color
const generateRandomRgbColor = () => {
  const r = Math.floor(Math.random() * 256); // Red
  const g = Math.floor(Math.random() * 256); // Green
  const b = Math.floor(Math.random() * 256); // Blue
  return `rgb(${r}, ${g}, ${b})`;
};

const RandomRgbColorComponent = () => {
  const [color, setColor] = useState(generateRandomRgbColor);

  const changeColor = () => {
    setColor(generateRandomRgbColor());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ color: color }}>This is a Random RGB Color</h2>
      <button onClick={changeColor} style={{ padding: '10px', marginTop: '20px' }}>
        Change Color
      </button>
    </div>
  );
};

export default RandomRgbColorComponent;
