import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';


export const addBox = (scene: Scene) => {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new Mesh(geometry, material);

  scene.add(cube);

  return cube;
};