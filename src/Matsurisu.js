import React from 'react';
import Scene from './scene';
import Parallax from './parallax';

function Matsurisu() {
  return (
    <Scene>
      <Parallax factor={1.0} position={0}>
        <p>まつりす</p>
      </Parallax>

      <Parallax factor={1.5} position={700} offset={-70}>
        <img alt="matsurisu" src="static/matsurisu_temp.png" />
      </Parallax>
      <Parallax factor={1.0} position={700} offset={70}>
        <p>それは、夏色まつりを愛するもの</p>
      </Parallax>

      <Parallax factor={0.8} position={1400} offset={-100}>
        <img alt="matsurisu" src="static/matsurisu_temp.png" />
      </Parallax>
      <Parallax factor={1.0} position={1400}>
        <p>一匹のまつりすなら、</p>
        <p>配信を見て応援できる</p>
      </Parallax>

      <Parallax factor={1.1} position={2100} offset={-80}>
        <img alt="matsurisu" style={{position: 'relative', margin: 0, left: 50}} src="static/matsurisu_temp.png" />
      </Parallax>
      <Parallax factor={0.8} position={2100} offset={-80}>
        <img alt="matsurisu" style={{position: 'relative', margin: 0, left: 200}} src="static/matsurisu_temp.png" />
      </Parallax>
      <Parallax factor={1.3} position={2100} offset={-80}>
        <img alt="matsurisu" style={{position: 'relative', margin: 0, left: 350}} src="static/matsurisu_temp.png" />
      </Parallax>
      <Parallax factor={1.0} position={2100} offset={80}>
        <p>三匹のまつりすなら、</p>
        <p>バンドを組める</p>
      </Parallax>

      <Parallax factor={1.1} position={2800} offset={-80}>
        <img alt="matsurisu" style={{display: 'inline-block', position: 'relative', margin: 0, top: 20, left: 20, transform: 'scale(0.5, 0.5)'}} src="static/matsurisu_temp.png" />
        <img alt="matsurisu" style={{display: 'inline-block', position: 'relative', margin: 0, top: 40, left: 100, transform: 'scale(0.5, 0.5)'}} src="static/matsurisu_temp.png" />
        <img alt="matsurisu" style={{display: 'inline-block', position: 'relative', margin: 0, top: 10, left: 30, transform: 'scale(0.5, 0.5)'}} src="static/matsurisu_temp.png" />
      </Parallax>
      <Parallax factor={0.8} position={2800} offset={-80}>
        <img alt="matsurisu" style={{display: 'inline-block', position: 'relative', margin: 0, top: 60, left: 80, transform: 'scale(0.5, 0.5)'}} src="static/matsurisu_temp.png" />
        <img alt="matsurisu" style={{display: 'inline-block', position: 'relative', margin: 0, top: 30, left: 20, transform: 'scale(0.5, 0.5)'}} src="static/matsurisu_temp.png" />
        <img alt="matsurisu" style={{display: 'inline-block', position: 'relative', margin: 0, top: 40, left: 60, transform: 'scale(0.5, 0.5)'}} src="static/matsurisu_temp.png" />
      </Parallax>
      <Parallax factor={1.3} position={2800} offset={-80}>
        <img alt="matsurisu" style={{display: 'inline-block', position: 'relative', margin: 0, top: 30, left: 60, transform: 'scale(0.5, 0.5)'}} src="static/matsurisu_temp.png" />
        <img alt="matsurisu" style={{display: 'inline-block', position: 'relative', margin: 0, top: 10, left: 80, transform: 'scale(0.5, 0.5)'}} src="static/matsurisu_temp.png" />
        <img alt="matsurisu" style={{display: 'inline-block', position: 'relative', margin: 0, top: 20, left: 40, transform: 'scale(0.5, 0.5)'}} src="static/matsurisu_temp.png" />
      </Parallax>
      <Parallax factor={1.0} position={2800} offset={80}>
        <p>どんどん多くなる</p>
      </Parallax>
      
      <Parallax factor={1.0} position={3500} offset={80}>
        <p>めっちゃ多くなって</p>
        <p>ズームアウトして</p>
        <p>最終的にモザイクになる</p>
      </Parallax>
    </Scene>
  ); 
}

export default Matsurisu;
