// import useMousePosition from "../../hooks/useMousePosition";

import { useEffect, useState } from "react";

const Cursor = ({clientX, clientY}) => {
  const [position, setPosition] = useState({ left: 0, top: 0});

  useEffect(() => {
    setPosition({
      left: clientX,
      top: clientY,
    });

  }, [clientX, clientY]);

  return(
    <div className="cursor" style={{ left: position.left, top: position.top }}></div>
  );
}

export default Cursor;