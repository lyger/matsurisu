import React, { useRef, useContext } from 'react';
import { ContainerContext } from './container';

export default function Parallax({ position, offset, stay, factor, children }) {
  const ref = useRef(null);
  const [containerDims] = useContext(ContainerContext);

  position = position || 0;
  offset = offset || 0;
  stay = (stay === undefined) ? 300 : stay;
  const delta = (containerDims.y + position) * factor;
  const top = Math.max(Math.min(delta + stay * factor, 0), delta) + (containerDims.height / 2) + offset;
  const zIndex = Math.floor(100 * factor);

  return (
    <div className="parallax" style={{left: 0, top, zIndex}}>
      {children}
    </div>
  );
}
