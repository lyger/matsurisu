import React, { useState } from 'react';

export default function Scroller({ y, minY, setY }) {
  const [held, setHeld] = useState(false);
  const [curClientY, setCurClientY] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const startHold = ({ clientY }) => { setHeld(true); setCurClientY(clientY); };
  const endHold = () => setHeld(false);
  const scroll = ({ deltaY }) => {
    if (autoplay) return;
    setHasMoved(true);
    setY(y - deltaY / 2);
  };
  const drag = ({ clientY }) => {
    if (!held || autoplay) return;
    setHasMoved(true);
    const deltaY = clientY - curClientY;
    setY(y + deltaY);
    setCurClientY(clientY);
  };
  const startAutoplay = () => {
    setHasMoved(true);
    setAutoplay(true);
    let curY = y;
    const autoplayInterval = setInterval(() => {
      curY -= 5;
      setY(curY);
      if (curY <= minY) {
        clearInterval(autoplayInterval);
        setAutoplay(false);
      }
    }, 25);
  };
  return (
    <div className="scroller"
      onPointerDown={startHold}
      onPointerLeave={endHold}
      onPointerCancel={endHold}
      onPointerUp={endHold}
      onPointerMove={drag}
      onWheel={scroll}
    >
      <button className={`play-prompt${(hasMoved) ? ' hidden' : ''}`} onClick={startAutoplay} disabled={autoplay || hasMoved}>自動再生</button>
      <div className={`scroll-prompt${(hasMoved) ? ' hidden' : ''}`}>スクロール</div>
    </div>
  );
}
