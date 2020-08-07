import React, { useRef, useLayoutEffect, useState, useContext } from 'react';
import { ContainerContext } from './scene';

export default function Parallax({ position, offset, stay, factor, children }) {
  const ref = useRef(null);
  const containerDims = useContext(ContainerContext);
  const [height, setHeight] = useState(0);

  position = position || 0;
  offset = offset || 0;
  stay = stay || 200;
  const delta = (containerDims.y + position) * factor;
  const top = Math.max(Math.min(delta + stay * factor, 0), delta) + (containerDims.height / 2) - (height / 2) + offset;
  const zIndex = Math.floor(100 * factor);
  const show = (top > containerDims.height || (top + 2 * height) < 0);

  useLayoutEffect(() => {
    if (!ref.current) return;
    setHeight(ref.current.getBoundingClientRect().height);
  }, [ref, setHeight, containerDims]);

  return (
    (show)
    ? null
    : <div ref={ref} style={{position: 'absolute', left: 0, top, width: 500, height: 'fit-content', zIndex}}>
        {children}
      </div>
  );
}
