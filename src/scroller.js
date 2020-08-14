import React, { useState } from 'react';

const SCROLL_STATE = {
  INITIAL: 'initial',
  MANUAL: 'manual',
  AUTO: 'auto',
  FINISHED: 'finished',
}

export default function Scroller({ y, minY, setY }) {
  const { INITIAL, MANUAL, AUTO, FINISHED } = SCROLL_STATE;
  const [scrollState, setScrollState] = useState(INITIAL);
  const [held, setHeld] = useState(false);
  const [curClientY, setCurClientY] = useState(0);
  const [autoplayInterval, setAutoplayInterval] = useState(null);

  const startHold = ({ clientY }) => { setHeld(true); setCurClientY(clientY); };
  const endHold = () => setHeld(false);

  const resetAutoplay = (newScrollState, localAutoplayInterval) => {
    clearInterval(localAutoplayInterval || autoplayInterval);
    setScrollState(newScrollState || MANUAL);
    setAutoplayInterval(null);
  }
  const changeY = (newY, localAutoplayInterval) => {
    if (newY === y) return;
    setY(newY);
    if (newY <= minY) {
      resetAutoplay(FINISHED, localAutoplayInterval);
    }
  }
  const resetY = (event) => {
    event.stopPropagation();
    changeY(0);
    setScrollState(MANUAL);
  };
  const scroll = ({ deltaY }) => {
    if (deltaY === 0) return;
    resetAutoplay(MANUAL);
    changeY(y - deltaY / 2);
  };
  const drag = ({ clientY }) => {
    if (!held) return;
    const deltaY = clientY - curClientY;
    if (deltaY === 0) return;
    resetAutoplay(MANUAL);
    changeY(y + deltaY);
    setCurClientY(clientY);
  };
  const startAutoplay = (event) => {
    event.stopPropagation();
    setScrollState(AUTO);
    let curY = y;
    const localAutoplayInterval = setInterval(() => {
      curY -= 5;
      changeY(curY, localAutoplayInterval);
    }, 25);
    setAutoplayInterval(localAutoplayInterval);
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
      <button
        className={`play-prompt${(scrollState === AUTO) ? ' hidden' : ''}`}
        onPointerDown={(scrollState === FINISHED) ? resetY : startAutoplay}
        disabled={(scrollState === AUTO)}
      >
        {(scrollState === FINISHED) ? 'Replay' : 'Autoplay'}
      </button>
      <div className={`scroll-prompt${(scrollState === INITIAL) ? '' : ' hidden'}`}>Scroll</div>
      <div className={`footer${(scrollState === FINISHED) ? '' : ' hidden'}`}>
        {/* eslint-disable-next-line */}
        Art:&nbsp;<a href={(scrollState === FINISHED) ? 'https://twitter.com/tera753' : null} target="_blank" rel="noopener noreferrer">Tera-tama</a>
        &nbsp;|&nbsp;
        {/* eslint-disable-next-line */}
        Code:&nbsp;<a href={(scrollState === FINISHED) ? 'https://twitter.com/lyger_0' : null} target="_blank" rel="noopener noreferrer">lyger</a>
      </div>
    </div>
  );
}
