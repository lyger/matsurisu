import React, { useState } from 'react';

export default function Scroller({ y, setY }) {
  const [held, setHeld] = useState(false);
  const [curClientY, setCurClientY] = useState(0);
  const startHold = ({clientY}) => { setHeld(true); setCurClientY(clientY); };
  const endHold = () => setHeld(false);
  const scroll = ({deltaY}) => setY(y - deltaY / 2);
  const drag = ({clientY}) => {
    if (!held) return;
    const deltaY = clientY - curClientY;
    setY(y + deltaY);
    setCurClientY(clientY);
  }
  return (
    <div className="scroller"
      onMouseDown={startHold}
      onMouseLeave={endHold}
      onMouseUp={endHold}
      onMouseMove={drag}
      onWheel={scroll}
    />
  );
}
