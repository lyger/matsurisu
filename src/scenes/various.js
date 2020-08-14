import React from 'react';
import Parallax from '../parallax';
import { TimeSprite } from '../sprite';
import Fade from '../fade';

export default function Various({ start }) {
  return (
    <>
      <Parallax factor={1.0} position={start} offset={-50}>
        <TimeSprite name="wave" width={180} center />
      </Parallax>
      <Fade start={start} end={start + 300} offset={50}>
        <p className="title">There are all sorts of Matsurisu</p>
      </Fade>

      <Parallax factor={1.5} position={start + 800} offset={0}>
        <TimeSprite name="art" width={200} x={50} />
      </Parallax>
      <Parallax factor={1.0} position={start + 800} offset={0}>
        <p className="title-right">Some Matsurisu draw</p>
      </Parallax>

      <Parallax factor={1.5} position={start + 1600} offset={0}>
        <TimeSprite name="music" width={200} x={400} />
      </Parallax>
      <Parallax factor={1.0} position={start + 1600} offset={0}>
        <p className="title-left">Some Matsurisu make music</p>
      </Parallax>

      <Parallax factor={1.5} position={start + 2400} offset={-50}>
        <TimeSprite name="pc" width={200} center />
      </Parallax>
      <Parallax factor={1.0} position={start + 2400} offset={50}>
        <p className="title">Some Matsurisu watch and cheer along</p>
      </Parallax>

      <Parallax factor={1.5} position={start + 3200} offset={-45}>
        <TimeSprite name="wave" width={100} x={50} />
      </Parallax>
      <Parallax factor={1.1} position={start + 3200} offset={-80}>
        <TimeSprite name="art" width={100} x={125} />
      </Parallax>
      <Parallax factor={1.6} position={start + 3200} offset={-75}>
        <TimeSprite name="music" width={100} x={410} />
      </Parallax>
      <Parallax factor={1.4} position={start + 3200} offset={-50}>
        <TimeSprite name="cheer" width={100} x={210} />
      </Parallax>
      <Parallax factor={1.2} position={start + 3200} offset={-40}>
        <TimeSprite name="sit" width={100} x={490} />
      </Parallax>
      <Parallax factor={1.8} position={start + 3200} offset={-55}>
        <TimeSprite name="pc" width={100} x={310} />
      </Parallax>
      <Fade start={start + 3200} end={start + 3500} offset={60}>
        <p className="title">While we may have different abilities,</p>
        <p className="title">our love for our idol is the same</p>
      </Fade>
    </>
  );
}
