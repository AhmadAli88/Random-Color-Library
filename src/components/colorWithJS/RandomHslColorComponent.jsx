import { useState } from 'react';

// Function to generate random hsl color
const generateRandomHslColor = () => {
  const h = Math.floor(Math.random() * 360); // Hue (0 to 360 degrees)
  const s = Math.floor(Math.random() * 101); // Saturation (0% to 100%)
  const l = Math.floor(Math.random() * 101); // Lightness (0% to 100%)
  return `hsl(${h}, ${s}%, ${l}%)`;
};

const RandomHslColorComponent = () => {
  const [color, setColor] = useState(generateRandomHslColor);

  const changeColor = () => {
    setColor(generateRandomHslColor());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ color: color }}>This is a Random HSL Color</h2>
      <button onClick={changeColor} style={{ padding: '10px', marginTop: '20px' }}>
        Change Color
      </button>
    </div>
  );
};

export default RandomHslColorComponent;
