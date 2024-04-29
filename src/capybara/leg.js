import * as THREE from 'three';

function createLeg(x, y, z) {
  const legGroup = new THREE.Group();

  const upperLegGeometry = new THREE.BoxGeometry(4, 7, 4);
  const upperLegMaterial = new THREE.MeshStandardMaterial({color: 0x994c00});
  const upperLeg = new THREE.Mesh(upperLegGeometry, upperLegMaterial);
  upperLeg.position.set(0, 2.5, 0);
  legGroup.add(upperLeg);

  const lowerLegGeometry = new THREE.BoxGeometry(2, 4, 2);
  const lowerLegMaterial = new THREE.MeshStandardMaterial({color: 0x663300});
  const lowerLeg = new THREE.Mesh(lowerLegGeometry, lowerLegMaterial);
  lowerLeg.position.set(0, -3, 0);
  legGroup.add(lowerLeg);

  const toeGeometry = new THREE.BoxGeometry(3, 1, 1);
  const centerToe = new THREE.Mesh(toeGeometry, lowerLegMaterial);
  centerToe.position.set(-0.5, -4.5, 0);
  legGroup.add(centerToe);

  const rightToe = new THREE.Mesh(toeGeometry, lowerLegMaterial);
  rightToe.position.set(-0.25, -4.5, -0.5);
  const rotationAngleMinus30 = THREE.MathUtils.degToRad(-30);
  rightToe.rotateY(rotationAngleMinus30);
  legGroup.add(rightToe);

  const leftToe = new THREE.Mesh(toeGeometry, lowerLegMaterial);
  leftToe.position.set(-0.25, -4.5, 0.5);
  const rotationAnglePlus30 = THREE.MathUtils.degToRad(30);
  leftToe.rotateY(rotationAnglePlus30);
  legGroup.add(leftToe);

  legGroup.position.set(x, y, z);
  return legGroup;
}

export default createLeg;
