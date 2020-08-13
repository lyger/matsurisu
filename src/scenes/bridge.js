import React from 'react';
import Fade from '../fade';

export default function Bridge({ start }) {
  return (
    <>
      <Fade start={start} end={start + 500} offset={0}>
        <p className="title">そして…</p>
      </Fade>
      <Fade start={start + 1000} end={start + 1500} offset={0}>
        <p className="title">500,000人が集まったら…</p>
      </Fade>
      <Fade start={start + 2000} end={start + 2500} offset={0}>
        <p className="title">何ができる？</p>
      </Fade>
      <Fade start={start + 3000} end={start + 3500} offset={0}>
        <p className="title">どんなことがある？</p>
      </Fade>
    </>
  );
}
