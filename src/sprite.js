import React from 'react';
import { ImageTimeAnimation, ImagePosAnimation } from './animation';

export function PosSprite({ name, x, y, stagger, width, tint, onLoad }) {
  let style = {display: 'inline-block', position: 'static', verticalAlign: 'top', marginLeft: x || 0, marginTop: y || 0};
  if (width) {
    style = {...style, width, height: 'auto'}
  }
  if (tint) {
    const [ brightness, hue ] = tint;
    style = {...style, filter: `brightness(${brightness}) hue-rotate(${hue}deg)`};
  }
  return (
    <ImagePosAnimation
      alt="matsurisu"
      style={style}
      frameDur={50}
      stagger={stagger}
      onLoad={onLoad}
      srcs={[`/matsurisu/static/img/sprite/${name}1.png`, `/matsurisu/static/img/sprite/${name}2.png`]}
    />
  );
}

export function TimeSprite({ name, x, y, center, stagger, width, tint, onLoad }) {
  let style = {};
  if (center) {
    style = {display: 'block', margin: '0 auto'};
  }
  else {
    style = {display: 'inline-block', position: 'relative', verticalAlign: 'top', marginLeft: x || 0, marginTop: y || 0};
  }
  if (width) {
    style = {...style, width, height: 'auto'}
  }
  if (tint) {
    const [ brightness, hue ] = tint;
    style = {...style, filter: `brightness(${brightness}) hue-rotate(${hue}deg)`};
  }
  return (
    <ImageTimeAnimation
      alt="matsurisu"
      style={style}
      frameDur={5}
      stagger={stagger}
      onLoad={onLoad}
      srcs={[`/matsurisu/static/img/sprite/${name}1.png`, `/matsurisu/static/img/sprite/${name}2.png`]}
    />
  );
}
