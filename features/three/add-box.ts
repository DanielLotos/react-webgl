import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  TextureLoader,
  Mesh,
} from 'three';


export const addBox = (scene: Scene) => {
  const geometry = new BoxGeometry(2, 2, 2);
  const texture = new TextureLoader().load('/box.jpg');
  const material = new MeshBasicMaterial({ map: texture });
  const cube = new Mesh(geometry, material);

  scene.add(cube);

  return cube;
};