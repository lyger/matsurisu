import React, { useContext } from 'react';
import { PixelZoom, ImageZoom } from '../zoom';
import Fade from '../fade';
import { ContainerContext } from '../container';
import { Helmet } from 'react-helmet-async';

function formatNumber(num) {
  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

function CountUp({ start, dur, startNum, endNum, accel }) {
  const [{ y }] = useContext(ContainerContext);
  const f = Math.pow(Math.max(Math.min((-y - start) / dur, 1), 0), accel);
  return (
    <>
      {formatNumber(Math.floor(startNum + f * (endNum - startNum)))}
    </>
  );
}

function TitleChange({ start, children }) {
  const [{ y }] = useContext(ContainerContext);
  return (
    <Helmet>
      {(-y >= start) && <title>{children}</title>}
    </Helmet>
  )
}

export default function Mosaic({ start, effectDur, fadeStart, fadeDur}) {
  return (
    <>
      <PixelZoom initialZoom={100} zoomStart={start} zoomEnd={start + fadeStart + fadeDur} zoomDur={effectDur} totalHeight={800} />
      <ImageZoom initialZoom={100} zoomStart={start} zoomDur={effectDur} fadeStart={start + fadeStart} fadeDur={fadeDur} totalHeight={800} />
      <Fade start={start + effectDur + 300} end={start + effectDur + 1300} layer={200}>
        <img alt="love" src="/matsurisu_en/static/img/mosaic.png" />
      </Fade>
      <Fade start={start + 300} end={start + effectDur * 0.8} fadeOutDur={effectDur * 0.2} layer={500} offset={320}>
        <p className="title-congrats">
          <CountUp start={start - 300} dur={effectDur + 300} startNum={0} endNum={500000} accel={5} />
        </p>
      </Fade>
      <Fade start={start + effectDur + 300} end={start + effectDur + 1300} layer={500} offset={300}>
        <p className="title-congrats">Congratulations on</p>
        <p className="title-congrats">500,000 subscribers!</p>
      </Fade>
      <TitleChange start={start + effectDur}>500,000 Matsurisu</TitleChange>
    </>
  );
}
