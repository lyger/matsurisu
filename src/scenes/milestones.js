import React from 'react';
import Parallax from '../parallax';
import { TimeSprite } from '../sprite';
import Fade from '../fade';

export function Milestone3D({ start }) {
  return (
    <>
      <Parallax factor={0.8} position={start} offset={-100} stay={1000}>
        <img src="/matsurisu/static/img/classroom.png" alt="classroom" />
      </Parallax>
      <Parallax factor={0.9} position={start} offset={-100} stay={1000}>
        <img src="/matsurisu/static/img/desk.png" alt="desk" />
      </Parallax>
      <Parallax factor={1.2} position={start + 100} offset={-40} stay={900}>
        <TimeSprite name="matsuri" width={300} x={0} />
      </Parallax>
      <Parallax factor={1.1} position={start + 100} offset={150} stay={900}>
        <TimeSprite name="glow" width={130} x={230} />
        <TimeSprite name="glow" width={130} stagger={1} x={-10} />
        <TimeSprite name="glow" width={130} x={-10} />
      </Parallax>
      <Parallax factor={1.0} position={start + 100} offset={120} stay={900}>
        <TimeSprite name="sglow" width={110} stagger={1} x={230} />
        <TimeSprite name="sglow" width={110} x={-20} />
        <TimeSprite name="sglow" width={110} stagger={1} x={-20} />
        <TimeSprite name="sglow" width={110} x={-20} />
      </Parallax>
      <Parallax factor={0.9} position={start + 100} offset={90} stay={900}>
        <TimeSprite name="sglow" width={90} x={230} />
        <TimeSprite name="sglow" width={90} stagger={1} x={-20} />
        <TimeSprite name="sglow" width={90} x={-20} />
        <TimeSprite name="sglow" width={90} stagger={1} x={-20} />
        <TimeSprite name="sglow" width={90} x={-20} />
      </Parallax>
      <Fade start={start + 300} end={start + 800} offset={230}>
        <p className="title">50,000人が集まったとき、3Dになれた</p>
      </Fade>
    </>
  );
}

export function MilestoneAtre({ start }) {
  return (
    <>
      <Parallax factor={0.8} position={start} offset={-60} stay={1000}>
        <img src="/matsurisu/static/img/shelves.png" alt="shelves" style={{width: 335, height: 'auto', marginLeft: 0}} />
        <img src="/matsurisu/static/img/shelves.png" alt="shelves" style={{width: 335, height: 'auto', marginLeft: -45}} />
      </Parallax>
      <Parallax factor={0.9} position={start} offset={-200} stay={1000}>
        <TimeSprite name="speaker" width={200} />
      </Parallax>
      <Parallax factor={1.1} position={start} offset={50} stay={1000}>
        <TimeSprite name="merch" width={200} x={300} />
      </Parallax>
      <Fade start={start + 300} end={start + 800} offset={160}>
        <p className="title">180,000人が集まったとき、アトレでコラボをした</p>
      </Fade>
    </>
  );
}

export function MilestoneWatanuki({ start }) {
  return (
    <>
      <Parallax factor={0.8} position={start} offset={-30} stay={1000}>
        <TimeSprite name="watch" width={200} x={190} tint={[1.1, 5]} />
        <TimeSprite name="watch" width={200} stagger={1} x={-100} y={5} />
        <TimeSprite name="watch" width={200} x={-100} y={15} tint={[0.95, -8]}/>
      </Parallax>
      <Parallax factor={0.9} position={start} offset={-150} stay={1000}>
        <TimeSprite name="watanuki" width={200} x={220} />
      </Parallax>
      <Parallax factor={1.1} position={start} offset={-60} stay={1000}>
        <img src="/matsurisu/static/img/TV.png" alt="TV" style={{width: 400, height: 'auto', marginLeft: -20}} />
      </Parallax>
      <Fade start={start + 300} end={start + 800} offset={130}>
        <p className="title">280,000人が集まったとき、テレビに出れた</p>
      </Fade>
    </>
  );
}

export function MilestoneDonuts({ start }) {
  return (
    <>
      <Parallax factor={0.8} position={start} offset={-60} stay={1000}>
        <img src="/matsurisu/static/img/bgdonut.png" alt="donut" style={{display: 'block', width: 300, height: 'auto', margin: '0 auto'}} />
      </Parallax>
      <Parallax factor={1.1} position={start} offset={40} stay={1000}>
        <TimeSprite name="donutsA" width={200} x={60} />
        <TimeSprite name="donutsB" width={200} stagger={1} x={90} />
      </Parallax>
      <Fade start={start + 300} end={start + 800} offset={175}>
        <p className="title">440,000人が集まったとき</p>
        <p className="title">念願のドーナツコラボができた</p>
      </Fade>
    </>
  );
}
