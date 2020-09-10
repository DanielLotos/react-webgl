import { useEffect, useRef, useState } from 'react';

import { webglRender } from './webgl-renderer';

export const ThreeJS = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    webglRender(canvasRef.current);
  }, []);

  return (
    <>
      <h1 style={{ position: 'absolute', top: 24, left: 24, color: 'white' }}>Three.js example</h1>
      <canvas id="kek" ref={canvasRef}></canvas>
    </>
  );
};
