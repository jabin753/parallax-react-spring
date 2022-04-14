import moon from './moon.png';
import land from './land.png';
import cat from './cat.gif';

import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
function App() {
  const ref = useRef();

  return (
    <Parallax pages={4} ref={ref}>
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={2}
        style={{
          backgroundImage: `url(${moon})`,
          backgroundSize: 'cover',
        }}
      >

      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={1}
        factor={4}
        style={{
          backgroundImage: `url(${land})`,
          backgroundSize: 'cover',
        }}
      >
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.2}
        speed={0.05}
        onClick={() => ref.current.scrollTo(3)}
      >
        <h2>Bienvenidos a mi Sitio 🙋‍♂️</h2>
      </ParallaxLayer>


      <ParallaxLayer
        sticky={{ start: 0.9, end: 2.5 }}
      >
        <div className="cat-wrapper">
          <img src={cat} alt="Cat" />
        </div>
      </ParallaxLayer>


      <ParallaxLayer
        offset={3.2}
        speed={2}
        onClick={() => ref.current.scrollTo(0)}
      >
        <h2>Web dev is awesome</h2>
      </ParallaxLayer>
    </Parallax>
  )
}

export default App
