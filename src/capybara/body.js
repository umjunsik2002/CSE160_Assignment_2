import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(18, 10, 12);
const material = new THREE.MeshStandardMaterial({color: 0xcc6600});
const body = new THREE.Mesh(geometry, material);
body.position.set(5, 4, 0);

export default body;
