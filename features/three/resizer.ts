import {
  WebGLRenderer,
  PerspectiveCamera,
} from 'three';

export const resizer = (renderer: WebGLRenderer, camera: PerspectiveCamera) => {
  const onWindowResize = () => {
    camera.aspect = (window.innerWidth - 16) / (window.innerHeight - 16);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth - 16, window.innerHeight - 16);
  }

  window.addEventListener('resize', onWindowResize);
}