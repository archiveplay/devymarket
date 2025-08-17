import {
  Assets,
  Texture,
} from 'pixi.js';
import {
  useEffect,
  useRef,
  useState,
} from 'react';

export function BunnySprite() {
  const spriteRef = useRef(null)

  const [texture, setTexture] = useState(Texture.EMPTY)
  const [isActive, setIsActive] = useState(false)
  const [pos, setPos] = useState({ x: 100, y: 100 })

  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets
        .load('https://pixijs.com/assets/bunny.png')
        .then((result) => {
          setTexture(result)
        });
    }
  }, [texture]);

  const runAway = () => {
    setPos({ x: Math.random() * 500, y: Math.random() * 500 })
  }

  return (
    <pixiSprite
      ref={spriteRef}
      anchor={0.5}
      eventMode={'static'}
      onClick={() => setIsActive(!isActive)}
      onPointerOver={runAway}
      scale={isActive ? 1 : 1.5}
      texture={texture}
      x={pos.x}
      y={pos.y} />
  );
}

