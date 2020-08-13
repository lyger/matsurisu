import React, { useContext } from 'react';
import { ContainerContext } from './container';

export default function Fade({ children, start, end, fadeDur, offset, layer }) {
  offset = offset || 0;
  fadeDur = fadeDur || 300;
  layer = (layer === undefined) ? 0 : layer;
  const [containerDims] = useContext(ContainerContext);

  const t = -containerDims.y;
  const show = (t > start - fadeDur) && (t < end + fadeDur);
  const opacity = 1 - (Math.max(Math.min((start - t) / fadeDur, 1), 0) + Math.max(Math.min((t - end) / fadeDur, 1), 0));
  const top = containerDims.height / 2 + offset;

  return (
    (show)
    ? <div className="fade" style={{top, opacity, zIndex: layer}}>
        {children}
      </div>
    : null
  );
}
