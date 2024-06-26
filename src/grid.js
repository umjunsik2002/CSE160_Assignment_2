import * as THREE from 'three';

export function setupGrid(scene) {
  const gridHelpers = [];

  const gridHelperX = new THREE.GridHelper(30, 30, 0x808080, 0x404040);
  scene.add(gridHelperX);
  gridHelpers.push(gridHelperX);

  const gridHelperY = new THREE.GridHelper(30, 30, 0x808080, 0x404040);
  gridHelperY.geometry.rotateX(Math.PI / 2);
  scene.add(gridHelperY);
  gridHelpers.push(gridHelperY);

  const gridHelperZ = new THREE.GridHelper(30, 30, 0x808080, 0x404040);
  gridHelperZ.geometry.rotateZ(Math.PI / 2);
  scene.add(gridHelperZ);
  gridHelpers.push(gridHelperZ);

  return gridHelpers;
}
