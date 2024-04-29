import * as THREE from 'three';

const headGroup = new THREE.Group();

const headGeometry = new THREE.BoxGeometry(10, 8, 8);
const headMaterial = new THREE.MeshStandardMaterial({color: 0xcc6600});
const head = new THREE.Mesh(headGeometry, headMaterial);
head.position.set(-9, 7, 0);
headGroup.add(head);

const noseMaterial = new THREE.MeshStandardMaterial({color: 0x994c00});
const mainNoseGeometry = new THREE.BoxGeometry(2.25, 2.25, 4);
const mainNose = new THREE.Mesh(mainNoseGeometry, noseMaterial);
mainNose.position.set(-13.125, 10.125, 0);
headGroup.add(mainNose);

const lowerNoseGeometry = new THREE.BoxGeometry(0.25, 1, 2);
const lowerNose = new THREE.Mesh(lowerNoseGeometry, noseMaterial);
lowerNose.position.set(-14.125, 8.5, 0);
headGroup.add(lowerNose);

const upperNoseGeometry = new THREE.BoxGeometry(3, 0.25, 2);
const upperNose = new THREE.Mesh(upperNoseGeometry, noseMaterial);
upperNose.position.set(-10.5, 11.125, 0);
headGroup.add(upperNose);

const noseBallMaterial = new THREE.MeshStandardMaterial({color: 0x663300});
const mainNoseBallGeometry = new THREE.BoxGeometry(0.25, 1, 2);
const mainNoseBall = new THREE.Mesh(mainNoseBallGeometry, noseBallMaterial);
mainNoseBall.position.set(-14.125, 7.5, 0);
headGroup.add(mainNoseBall);

const LRNoseBallGeometry = new THREE.BoxGeometry(0.25, 1, 1);
const leftNoseBall = new THREE.Mesh(LRNoseBallGeometry, noseBallMaterial);
leftNoseBall.position.set(-14.125, 8.5, -1.5);
headGroup.add(leftNoseBall);
const rightNoseBall = new THREE.Mesh(LRNoseBallGeometry, noseBallMaterial);
rightNoseBall.position.set(-14.125, 8.5, 1.5);
headGroup.add(rightNoseBall);

const eyeMaterial = new THREE.MeshStandardMaterial({color: 0x000000});
const eyeBallMaterial = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
const eyeGeometry = new THREE.BoxGeometry(1, 1, 0.25);

const rightEye1 = new THREE.Mesh(eyeGeometry, eyeMaterial);
rightEye1.position.set(-7.5, 9.5, 4);
headGroup.add(rightEye1);
const rightEye2 = new THREE.Mesh(eyeGeometry, eyeMaterial);
rightEye2.position.set(-6.5, 9.5, 4);
headGroup.add(rightEye2);
const rightEye3 = new THREE.Mesh(eyeGeometry, eyeMaterial);
rightEye3.position.set(-6.5, 8.5, 4);
headGroup.add(rightEye3);
const rightEyeBall = new THREE.Mesh(eyeGeometry, eyeBallMaterial);
rightEyeBall.position.set(-7.5, 8.5, 4);
headGroup.add(rightEyeBall);

const leftEye1 = new THREE.Mesh(eyeGeometry, eyeMaterial);
leftEye1.position.set(-7.5, 9.5, -4);
headGroup.add(leftEye1);
const leftEye2 = new THREE.Mesh(eyeGeometry, eyeMaterial);
leftEye2.position.set(-6.5, 9.5, -4);
headGroup.add(leftEye2);
const leftEye3 = new THREE.Mesh(eyeGeometry, eyeMaterial);
leftEye3.position.set(-6.5, 8.5, -4);
headGroup.add(leftEye3);
const leftEyeBall = new THREE.Mesh(eyeGeometry, eyeBallMaterial);
leftEyeBall.position.set(-7.5, 8.5, -4);
headGroup.add(leftEyeBall);

const earGeometry = new THREE.BoxGeometry(2, 2, 1);
const rightEar = new THREE.Mesh(earGeometry, noseBallMaterial);
rightEar.position.set(-6, 11, 3.5);
const rotationAnglePlus30 = THREE.MathUtils.degToRad(30);
const rotationAngleMinus15 = THREE.MathUtils.degToRad(-15);
rightEar.rotateX(rotationAnglePlus30);
rightEar.rotateY(rotationAngleMinus15);
headGroup.add(rightEar);

const leftEar = new THREE.Mesh(earGeometry, noseBallMaterial);
leftEar.position.set(-6, 11, -3.5);
const rotationAngleMinus30 = THREE.MathUtils.degToRad(-30);
const rotationAnglePlus15 = THREE.MathUtils.degToRad(15);
leftEar.rotateX(rotationAngleMinus30);
leftEar.rotateY(rotationAnglePlus15);
headGroup.add(leftEar);

export default headGroup;
