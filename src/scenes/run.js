import React, { useState, useEffect, useContext } from 'react';
import Parallax from '../parallax';
import { PosSprite } from '../sprite';
import Fade from '../fade';
import { alea } from 'seedrandom';
import { ContainerContext } from '../container';

const RISUWIDTH = 150;

function randRange(rng, lo, hi) {
  return rng() * (hi - lo) + lo;
}

function Herd({ num, seed, scatterX, scatterY, onLoad }) {
  const [data, setData] = useState([]);
  const [{ width }] = useContext(ContainerContext);
  useEffect(() => {
    const rng = new alea(seed);
    const newData = [];
    let cumX = 0;
    let rows = 0;
    for (let i = 0; i < num; i++) {
      const newRisu = {
        x: randRange(rng, 0, scatterX),
        y: randRange(rng, -scatterY / 2, scatterY / 2) + scatterY * rows,
        variant: Math.floor(rng() * 5),
        stagger: (rng() > 0.5) ? 1 : 0,
      };
      if (cumX + RISUWIDTH + newRisu.x > width) {
        newRisu.x -= width - RISUWIDTH;
        rows++;
      }
      cumX += RISUWIDTH + newRisu.x
      newData.push(newRisu);
    }
    setData(newData);
  }, [num, seed, scatterX, scatterY, width]);

  return data.map((risu, i) => {
    const key = `${seed}${i}`;
    return (
      <PosSprite key={key} name={`run${risu.variant}_`} width={RISUWIDTH} stagger={risu.stagger} x={risu.x} y={risu.y} onLoad={onLoad} />
    );
  });
}

export function RunTransition({ start }) {
  return (
    <>
      <Parallax factor={1.3} position={start} stay={0} offset={0}>
        <Herd num={7} seed={"changing"} scatterX={70} scatterY={250} />
      </Parallax>
      <Parallax factor={1.5} position={start} stay={0} offset={300}>
        <Herd num={6} seed={"scenes"} scatterX={70} scatterY={250} />
      </Parallax>
      <Parallax factor={1.1} position={start} stay={0} offset={600}>
        <Herd num={10} seed={"currently..."} scatterX={70} scatterY={250} />
      </Parallax>
      <Parallax factor={1.2} position={start} stay={0} offset={900}>
        <Herd num={9} seed={"please hold"} scatterX={70} scatterY={250} />
      </Parallax>
    </>
  );
}

export default function Run({ start }) {
  return (
    <>
      <Fade start={start} end={start + 300}>
        <p className="title">And those Matsurisu</p>
      </Fade>
      <Parallax factor={1.1} position={start + 400} stay={0} offset={-100}>
        <Herd num={2} seed={"natsuiro"} scatterX={70} scatterY={400} />
      </Parallax>
      <Parallax factor={1.4} position={start + 400} stay={0} offset={300}>
        <Herd num={3} seed={"matsuri"} scatterX={70} scatterY={400} />
      </Parallax>

      <Fade start={start + 800} end={start + 1100}>
        <p className="title">keep growing</p>
      </Fade>
      <Parallax factor={1.2} position={start + 1200} stay={0} offset={-200}>
        <Herd num={3} seed={"we"} scatterX={70} scatterY={200} />
      </Parallax>
      <Parallax factor={1.4} position={start + 1200} stay={0}>
        <Herd num={2} seed={"love"} scatterX={70} scatterY={200} />
      </Parallax>
      <Parallax factor={1.0} position={start + 1200} stay={0} offset={200}>
        <Herd num={4} seed={"you"} scatterX={70} scatterY={200} />
      </Parallax>

      <Fade start={start + 1600} end={start + 1900}>
        <p className="title">in number</p>
      </Fade>
      <Parallax factor={0.9} position={start + 2200} stay={0} offset={-200}>
        <Herd num={7} seed={"congratulations"} scatterX={70} scatterY={250} />
      </Parallax>
      <Parallax factor={1.3} position={start + 2200} stay={0} offset={100}>
        <Herd num={8} seed={"500,000"} scatterX={70} scatterY={300} />
      </Parallax>
      <Parallax factor={1.6} position={start + 2200} stay={0} offset={500}>
        <Herd num={10} seed={"subscribers!"} scatterX={70} scatterY={300} />
      </Parallax>
    </>
  );
}
