import React, { useContext, useEffect } from 'react';
import Container, { ContainerContext } from './container';
import Intro from './scenes/intro';
import Various from './scenes/various';
import Mosaic from './scenes/mosaic';
import Run, { RunTransition } from './scenes/run';
import { Milestone3D, MilestoneAtre, MilestoneWatanuki, MilestoneDonuts } from './scenes/milestones';
import Preloader from './preloader';
import Bridge from './scenes/bridge';

function PaddedScene({ scene, start, end, padStart, padEnd, ...props }) {
  padStart = padStart || 400;
  padEnd = padEnd || 400;
  const SceneClass = scene;
  const [{ y }] = useContext(ContainerContext);
  const show = y < (-start + padStart) && y > (-end - padEnd);

  return (
    (show)
    ? <SceneClass start={start} {...props} />
    : null
  );
}

function RelativeScene({ scene, dur, padStart, padEnd, offsetStart, offsetEnd }) {
  return null;
}

function RelativeTimeline({ children }) {
  const dispatch = useContext(ContainerContext)[1];

  let currentTime = 0;

  const timeline = React.Children.map(children, (child, i) => {
    let { scene, dur, padStart, padEnd, offsetStart, offsetEnd, ...props } = child.props;
    offsetStart = (offsetStart === undefined) ? 0 : offsetStart;
    offsetEnd = (offsetEnd === undefined) ? 0 : offsetEnd;

    const start = currentTime + offsetStart;
    const end = start + dur;
    currentTime = end + offsetEnd;

    return <PaddedScene key={i} scene={scene} start={start} end={end} padStart={padStart} padEnd={padEnd} {...props} />
  });

  useEffect(() => dispatch({type: 'SET_MIN_Y', value: -currentTime}), [currentTime, dispatch]);

  return timeline;
}

function Matsurisu() {
  return (
    <Container>
      <Preloader/>
      <RelativeTimeline>
        <RelativeScene scene={Intro} dur={1600} />
        <RelativeScene scene={Various} dur={4000} padStart={800} />
        <RelativeScene scene={Run} dur={3600} offsetStart={200} offsetEnd={-600} />
        <RelativeScene scene={Milestone3D} dur={1800} padStart={1200} />
        <RelativeScene scene={RunTransition} dur={1500} padStart={800} offsetStart={-600} offsetEnd={-400} />
        <RelativeScene scene={MilestoneAtre} dur={1800} padStart={1200} />
        <RelativeScene scene={RunTransition} dur={1500} padStart={800} offsetStart={-600} offsetEnd={-400} />
        <RelativeScene scene={MilestoneWatanuki} dur={1800} padStart={1200} />
        <RelativeScene scene={RunTransition} dur={1500} padStart={800} offsetStart={-600} offsetEnd={-400} />
        <RelativeScene scene={MilestoneDonuts} dur={1800} padStart={1200} />
        <RelativeScene scene={RunTransition} dur={1500} padStart={800} offsetStart={-600} offsetEnd={-400} />
        <RelativeScene scene={Bridge} dur={6000} offsetEnd={-600} />
        <RelativeScene scene={Mosaic} dur={3500} effectDur={3000} fadeStart={1500} fadeDur={500} />
      </RelativeTimeline>
    </Container>
  ); 
}

export default Matsurisu;
