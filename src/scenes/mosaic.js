import React from 'react';
import { PixelZoom, ImageZoom } from '../zoom';
import Fade from '../fade';

export default function Mosaic({ start, effectDur, fadeStart, fadeDur}) {
  return (
    <>
      <PixelZoom initialZoom={100} zoomStart={start} zoomEnd={start + fadeStart + fadeDur} zoomDur={effectDur} totalHeight={800} />
      <ImageZoom initialZoom={100} zoomStart={start} zoomDur={effectDur} fadeStart={start + fadeStart} fadeDur={fadeDur} totalHeight={800} />
      <Fade start={start + effectDur + 300} end={start + effectDur + 1300} layer={200}>
        <img alt="love" src="/matsurisu/static/img/mosaic.png" />
      </Fade>
      <Fade start={start + effectDur + 300} end={start + effectDur + 1300} layer={500} offset={320}>
        <p className="title-congrats">50万人おめでとう！！！</p>
      </Fade>
    </>
  );
}
