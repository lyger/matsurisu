import React from 'react';
import Parallax from '../parallax';
import { TimeSprite } from '../sprite';
import Fade from '../fade';

export default function Intro({ start }) {
  return (
    <>
      <Parallax factor={1.0} position={start} offset={-50} stay={0}>
        <TimeSprite name="sit" width={200} center />
      </Parallax>
      <Fade start={start} end={start} offset={50}>
        <p className="title">Matsurisu</p>
      </Fade>

      <Parallax factor={1.0} position={start + 800} offset={-50}>
        <TimeSprite name="cheer" width={200} center />
      </Parallax>
      <Fade start={start + 800} end={start + 1100} offset={50}>
        <p className="title">Such is the name for those who love Natsuiro Matsuri</p>
      </Fade>
    </>
  );
}
