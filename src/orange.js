import * as THREE from 'three';

function createOrange(x, y, z) {
  const orangeGroup = new THREE.Group();

  const ellipsoidGeometry = new THREE.SphereGeometry(1, 32, 32); // Radius: 1 along all axes
  ellipsoidGeometry.applyMatrix4(new THREE.Matrix4().makeScale(2, 1.5, 2)); // Scale along x, y, and z axes
  const ellipsoidMaterial = new THREE.MeshStandardMaterial({ color: 0xff8000 });
  const ellipsoidMesh = new THREE.Mesh(ellipsoidGeometry, ellipsoidMaterial);
  ellipsoidMesh.position.set(0, 0, 0);
  orangeGroup.add(ellipsoidMesh);

  const cubeGeometry = new THREE.BoxGeometry(1, 1/4, 1);
  const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x009900 });
  const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cubeMesh.position.set(0, 1.5, 0);
  orangeGroup.add(cubeMesh);

  orangeGroup.position.set(x, y, z);
  return orangeGroup;
}

export default createOrange;
