import { useState } from 'react';
import randomColor from 'randomcolor';

const ColorMemoryGame = () => {
  const [tiles, setTiles] = useState(
    Array.from({ length: 9 }, () => randomColor())
  );

  const shuffleTiles = () => {
    setTiles(Array.from({ length: 9 }, () => randomColor()));
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '10px' }}>
        {tiles.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: '100px',
              height: '100px',
            }}
          ></div>
        ))}
      </div>
      <button onClick={shuffleTiles} style={{ marginTop: '20px' }}>
        Shuffle Colors
      </button>
    </div>
  );
};

export default ColorMemoryGame;
