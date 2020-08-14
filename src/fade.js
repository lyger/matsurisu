import React, { useContext } from 'react';
import { ContainerContext } from './container';

export default function Fade({ children, start, end, fadeDur, fadeInDur, fadeOutDur, offset, layer }) {
  offset = offset || 0;
  fadeDur = fadeDur || 300;
  layer = (layer === undefined) ? 0 : layer;
  const [containerDims] = useContext(ContainerContext);

  if (fadeInDur === undefined) fadeInDur = fadeDur || 1e-10;
  if (fadeOutDur === undefined) fadeOutDur = fadeDur || 1e-10;

  const t = -containerDims.y;
  const show = (t > start - fadeInDur) && (t < end + fadeOutDur);
  const opacity = 1 - (Math.max(Math.min((start - t) / fadeInDur, 1), 0) + Math.max(Math.min((t - end) / fadeOutDur, 1), 0));
  const top = containerDims.height / 2 + offset;

  return (
    (show)
    ? <div className="fade" style={{top, opacity, zIndex: layer}}>
        {children}
      </div>
    : null
  );
}
