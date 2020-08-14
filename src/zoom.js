import React, { useContext } from 'react';
import { ContainerContext } from './container';
import { TimeSprite } from './sprite';
import getPixel from './pixels';

const ACCELERATION = 0.6;

export function PixelZoom({ zoomStart, zoomDur, zoomEnd, initialZoom, totalHeight }) {
  const [{ width, height, y }] = useContext(ContainerContext);
  if (y + zoomStart > 0 || y + zoomEnd < 0) return null;

  const f = Math.pow(Math.min(Math.max(-(y + zoomStart) / zoomDur, 0), 1), ACCELERATION);

  const top = height - (height / 2 + totalHeight / 2) * f;

  const zoom = (initialZoom - 1) * (1 - f) + 1;
  const spanH = (Math.ceil(width / (zoom * 2)) * 2 + 1) / 2;
  const startH = Math.floor(width / 2 - spanH);
  const endH = Math.floor(width / 2 + spanH);
  const startV = 0;
  const endV = Math.ceil((height - top) / zoom);
  const rows = [];

  for (let j = startV; j < endV; j++) {
    const pixels = [];
    for (let i = startH; i < endH; i++) {
      const key = `(${i},${j})`;
      pixels.push(<TimeSprite key={key} name={`pixel${getPixel(i, j)}_`} width={zoom} x={0} y={0} />);
    }
    rows.push(<div className="pixel-row" key={`row${j}`} style={{height: zoom}}>{pixels}</div>);
  }

  return (
    <div style={{position: 'absolute', top, width}}>
      {rows}
    </div>
  );
}

export function ImageZoom({ zoomStart, zoomDur, fadeStart, fadeDur, initialZoom, totalHeight }) {
  const [{ width, height, y }] = useContext(ContainerContext);
  if (y + zoomStart > 0) return null;

  const f = Math.pow(Math.min(Math.max(-(y + zoomStart) / zoomDur, 0), 1), ACCELERATION);

  const top = height - (height / 2 + totalHeight / 2) * f;

  const zoom = (initialZoom - 1) * (1 - f) + 1;
  const opacity = 1 - Math.pow(Math.max(Math.min((fadeStart + fadeDur + y) / fadeDur, 1), 0), 0.5);

  return (
    <div className="mosaic-wrapper" style={{top, opacity}}>
      <img
        className="mosaic"
        alt="matsuri"
        style={{width: zoom * width, height: zoom * totalHeight}}
        src="/matsurisu_en/static/img/mosaic_monochrome.gif"
      />
    </div>
  );
}
