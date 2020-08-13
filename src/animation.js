import React, { useContext } from 'react';
import { AnimationContext, ContainerContext } from './container';

function getFrame(counter, frameDur, numFrames) {
  frameDur = frameDur || 1;
  return Math.floor(counter / frameDur) % numFrames;
}

export function ImageAnimation({ control, frameDur, srcs, alt, style, stagger, onLoad }) {
  stagger = stagger || 0;
  const i = getFrame(control, frameDur, srcs.length);
  const mySrcs = [...srcs];
  for (let j = 0; j < stagger; j++) mySrcs.push(mySrcs.shift());
  return (
    <img alt={alt} style={style} src={mySrcs[i]} onLoad={onLoad} />
  );
}

export function ImageTimeAnimation({ frameDur, srcs, alt, style, stagger, onLoad }) {
  const frame = useContext(AnimationContext);
  return <ImageAnimation control={frame} {...{ frameDur, srcs, alt, style, stagger, onLoad }} />
}

export function ImagePosAnimation({ frameDur, srcs, alt, style, stagger, onLoad }) {
  const [{ y }] = useContext(ContainerContext);
  return <ImageAnimation control={-y} {...{ frameDur, srcs, alt, style, stagger, onLoad }} />
}
