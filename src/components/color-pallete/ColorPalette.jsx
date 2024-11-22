import { useState } from 'react';
import randomColor from 'randomcolor';

const ColorPalette = () => {
  const [colors, setColors] = useState(
    Array.from({ length: 5 }, () => randomColor())
  );

  const generatePalette = () => {
    setColors(Array.from({ length: 5 }, () => randomColor()));
  };

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: '100px',
              height: '100px',
              margin: '5px',
            }}
          ></div>
        ))}
      </div>
      <button onClick={generatePalette}>Generate New Palette</button>
    </div>
  );
};

export default ColorPalette;
