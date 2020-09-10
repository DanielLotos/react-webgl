import {WebGLRenderer, Scene, PerspectiveCamera, Mesh} from 'three';

export const animate = (renderer: WebGLRenderer, scene: Scene, camera: PerspectiveCamera, cube: Mesh) => {
  const rafAnimate = () => {
    requestAnimationFrame(rafAnimate);

    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;

    renderer.render(scene, camera);
  }

  rafAnimate();
}