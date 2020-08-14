import React from 'react';
import Fade from '../fade';
import Parallax from '../parallax';
import { TimeSprite, PosSprite } from '../sprite';

export default function Bridge({ start }) {
  return (
    <>
      {[
        {factor: 1.13, position: start + 52, x: 384, tint: [1.07, 5]},
        {factor: 1.11, position: start + 548, x: 192, tint: [0.87, -1]},
        {factor: 1.26, position: start + 992, x: 237, tint: [0.88, 8]},
        {factor: 1.28, position: start + 1244, x: 59, tint: [1.13, -12]},
        {factor: 1.37, position: start + 1660, x: 426, tint: [0.86, 2]},
        {factor: 1.23, position: start + 2196, x: 455, tint: [1.08, -10]},
        {factor: 1.22, position: start + 2529, x: 215, tint: [0.98, -10]},
        {factor: 1.30, position: start + 2965, x: 340, tint: [1.00, 7]},
        {factor: 1.33, position: start + 3345, x: 240, tint: [1.03, -2]},
        {factor: 1.11, position: start + 3616, x: 254, tint: [0.94, 0]},
        {factor: 1.33, position: start + 4139, x: 111, tint: [1.08, 3]},
        {factor: 1.13, position: start + 4596, x: 337, tint: [1.13, 0]},
        {factor: 1.28, position: start + 4966, x: 286, tint: [0.90, 4]},
        {factor: 1.12, position: start + 5399, x: 179, tint: [0.89, 2]},
        {factor: 1.10, position: start + 5710, x: 131, tint: [1.01, 0]},
      ].map(({ factor, position, x, tint }, i) => 
        <Parallax key={i} factor={factor} position={position} stay={0}>
          <PosSprite name="run0_" width={100} x={x} tint={tint} />
        </Parallax>
      )}

      <Parallax factor={1.16} position={start + 259} stay={0}>
        <TimeSprite name="sit" width={100} x={365} />
      </Parallax>
      <Parallax factor={1.32} position={start + 636} stay={0}>
        <TimeSprite name="wave" width={100} x={130} />
      </Parallax>
      <Parallax factor={1.37} position={start + 1105} stay={0}>
        <TimeSprite name="art" width={100} x={293} />
      </Parallax>
      <Parallax factor={1.19} position={start + 1980} stay={0}>
        <TimeSprite name="music" width={100} x={101} />
      </Parallax>
      <Parallax factor={1.26} position={start + 2383} stay={0}>
        <TimeSprite name="pc" width={100} x={92} />
      </Parallax>
      <Parallax factor={1.23} position={start + 2867} stay={0}>
        <TimeSprite name="watch" width={100} x={200} />
      </Parallax>
      <Parallax factor={1.14} position={start + 3265} stay={0}>
        <TimeSprite name="glow" width={100} x={463} />
      </Parallax>
      <Parallax factor={1.15} position={start + 3745} stay={0}>
        <TimeSprite name="merch" width={100} x={354} />
      </Parallax>
      <Parallax factor={1.28} position={start + 4839} stay={0}>
        <TimeSprite name="cheer" width={100} x={183} />
      </Parallax>

      <Fade start={start} end={start + 400} offset={0}>
        <p className="title">まつりちゃんの頑張りに惹かれて</p>
        <p className="title">たくさんのまつりすが集まってきた</p>
      </Fade>
      <Fade start={start + 1000} end={start + 1400} offset={0}>
        <p className="title">まつりちゃんの頑張りが報われるように</p>
        <p className="title">たくさんのまつりすが応援してきた</p>
      </Fade>
      <Fade start={start + 2000} end={start + 2400} offset={0}>
        <p className="title">まつりちゃんのやりたいことが叶うように</p>
      </Fade>
      <Fade start={start + 3000} end={start + 3400} offset={0}>
        <p className="title">まつりちゃんの夢が叶うように</p>
      </Fade>
      <Fade start={start + 4000} end={start + 4400} offset={0}>
        <p className="title">一人一人のちからは小さいけれど</p>
      </Fade>
      <Fade start={start + 5000} end={start + 5400} offset={0}>
        <p className="title">500,000人も集まればきっと…</p>
      </Fade>
    </>
  );
}
