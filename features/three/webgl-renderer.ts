import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
} from 'three';

import { animate } from './animate';
import { addBox } from './add-box';
import { resizer } from './resizer';

export const webglRender = (canvas: HTMLCanvasElement) => {
  const renderer = new WebGLRenderer({ canvas });
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, (window.innerWidth - 16) / (window.innerHeight - 16), 0.1, 1000);

  renderer.setSize(window.innerWidth - 16, window.innerHeight - 16);
  camera.position.z = 5;

  const cube = addBox(scene);
  animate(renderer, scene, camera, cube);

  resizer(renderer, camera);
};