import { useState } from "react";
import { useSpring, animated } from "react-spring";
import randomColor from "randomcolor";

const AnimatedRandomColor = () => {
  const [color, setColor] = useState(randomColor());
  const props = useSpring({ backgroundColor: color });

  const changeColor = () => {
    setColor(randomColor());
  };

  return (
    <animated.div style={{ ...props, height: "200px", width: "200px" }}>
      <button onClick={changeColor} style={{ padding: "10px" }}>
        Change Color
      </button>
    </animated.div>
  );
};

export default AnimatedRandomColor;
