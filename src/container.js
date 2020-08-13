import React, { useState, useRef, useEffect, useLayoutEffect, createContext, useReducer, useCallback } from 'react';
import Scroller from './scroller';

const FPS = 10;

const initialDims = { width: 625, height: 0, y: 0, minY: 0, maxY: -0 };

function Reducer(state, { type, value }) {
  switch (type) {
    case 'SET_HEIGHT':
      return {...state, height: value};
    case 'SET_WIDTH':
      return {...state, width: value};
    case 'SET_Y':
      const { minY, maxY } = state;
      return {...state, y: Math.max(Math.min(value, maxY), minY)};
    case 'SET_MIN_Y':
      return {...state, minY: value};
    default:
      return state
  }
}

export const AnimationContext = createContext(0);
export const ContainerContext = createContext(initialDims);

export default function Container({ children }) {
  const [dims, dispatch] = useReducer(Reducer, initialDims);
  const [frame, setFrame] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const animationTimer = setInterval(() => setFrame(frame + 1), 1000 / FPS);
    return () => clearInterval(animationTimer);
  }, [frame, setFrame]);

  const recalculateDims = useCallback(() => {
    if (!ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    dispatch({type: 'SET_HEIGHT', value: bounds.height});
    dispatch({type: 'SET_WIDTH', value: bounds.width});
  }, [ref, dispatch]);

  useEffect(() => {
    window.addEventListener('resize', recalculateDims);

    return () => window.removeEventListener('resize', recalculateDims);
  }, [recalculateDims])

  useLayoutEffect(recalculateDims, [recalculateDims]);

  return (
    <AnimationContext.Provider value={frame}>
      <ContainerContext.Provider value={[dims, dispatch]}>
        <Scroller y={dims.y} minY={dims.minY} setY={(y) => dispatch({type: 'SET_Y', value: y})} />
        <div className="main" ref={ref}>
          {children}
        </div>
      </ContainerContext.Provider>
    </AnimationContext.Provider>
  );
}
