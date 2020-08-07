import React, { useState, useRef, useEffect, useLayoutEffect, createContext, useReducer } from 'react';
import Scroller from './scroller';

const FPS = 10;

const initialDims = { width: 500, height: 0, y: 0 };

function Reducer(state, { type, value }) {
  switch (type) {
    case 'SET_HEIGHT':
      return {...state, height: value}
    case 'SET_WIDTH':
      return {...state, width: value}
    case 'SET_Y':
      return {...state, y: value}
    default:
      return state
  }
}

export const AnimationContext = createContext(0);
export const ContainerContext = createContext(initialDims);

export default function Scene({ children }) {
  const [dims, dispatch] = useReducer(Reducer, initialDims);
  const [frame, setFrame] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const animationTimer = setInterval(() => setFrame(frame + 1), 1000 / FPS);
    return () => clearInterval(animationTimer);
  }, [frame, setFrame]);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    dispatch({type: 'SET_HEIGHT', value: bounds.height});
    dispatch({type: 'SET_WIDTH', value: bounds.width});
  }, [ref, dispatch]);

  return (
    <AnimationContext.Provider value={frame}>
      <ContainerContext.Provider value={dims}>
        <Scroller y={dims.y} setY={(y) => dispatch({type: 'SET_Y', value: y})} />
        <div className="main" ref={ref}>
          {children}
        </div>
      </ContainerContext.Provider>
    </AnimationContext.Provider>
  );
}
