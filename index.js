import * as THREE from 'three';
import Stats from 'stats.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { setupGrid } from './src/grid.js'
import { setupLighting } from './src/lighting.js';

import body from './src/capybara/body.js';
import headGroup from './src/capybara/head.js';
import createLeg from './src/capybara/leg.js';
import createOrange from './src/orange.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 40;

// Create a renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('c') });
renderer.setSize(800, 800);

// Create a grid helper
const gridHelpers = setupGrid(scene);
gridHelpers.forEach(gridHelper => {
  gridHelper.visible = false;
});
function toggleGrid() {
  const isChecked = document.getElementById('grid').checked;
  gridHelpers.forEach(gridHelper => {
    gridHelper.visible = isChecked;
  });
}
const gridCheckbox = document.getElementById('grid');
gridCheckbox.addEventListener('change', toggleGrid);

// Create a directional light
setupLighting(scene);

// Create a new Stats instance
const stats = new Stats();
stats.showPanel(0); // 0: FPS, 1: MS, 2: MB, 3+: Custom
document.body.appendChild(stats.dom);
stats.dom.style.left = 'auto';
stats.dom.style.right = '0';

// Create OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableZoom = false;
controls.addEventListener('change', () => renderer.render(scene, camera));

// Add the new meshes to the scene
scene.add(body);
scene.add(headGroup);

// Create legs at position (x, y, z)
const frontRightLeg = createLeg(-1, -6, 4);
scene.add(frontRightLeg);
const frontLeftLeg = createLeg(-1, -6, -4);
scene.add(frontLeftLeg);
const backRightLeg = createLeg(11, -6, 4);
scene.add(backRightLeg);
const backLeftLeg = createLeg(11, -6, -4);
scene.add(backLeftLeg);

// Define a variable to track whether animation is enabled
let animationEnabled = true;
function toggleAnimation() {
  animationEnabled = !animationEnabled;
}
const animationCheckbox = document.getElementById('animation');
animationCheckbox.addEventListener('change', toggleAnimation);

// Function to update leg rotations for walking animation
let legAngle = 0;
function updateLegs() {
  if (animationEnabled) {
    const legRotation = Math.sin(legAngle) * Math.PI / 16;
    frontRightLeg.rotation.z = legRotation;
    frontLeftLeg.rotation.z = -legRotation;
    backRightLeg.rotation.z = -legRotation;
    backLeftLeg.rotation.z = legRotation;
    legAngle += 0.1;
  } else {
    frontRightLeg.rotation.z = 0;
    frontLeftLeg.rotation.z = 0;
    backRightLeg.rotation.z = 0;
    backLeftLeg.rotation.z = 0;
  }
}

// Function to handle changes to the orange input
const oranges = [];
const orangeRange = document.getElementById('orange');
const orangeValue = document.getElementById('orangeValue');
function handleRangeChange() {
  oranges.forEach(orange => scene.remove(orange));
  oranges.length = 0;
  const numberOfOranges = parseInt(orangeRange.value);
  for (let i = 0; i < numberOfOranges; i++) {
    const newOrange = createOrange(-7, 12.5 + i * 3, 0);
    scene.add(newOrange);
    oranges.push(newOrange);
  }
  orangeValue.value = orangeRange.value;
}
function handleNumberChange() {
  orangeRange.value = orangeValue.value;
  handleRangeChange();
}
orangeRange.addEventListener('input', handleRangeChange);
orangeValue.addEventListener('change', handleNumberChange);
handleRangeChange();

// Inside the animate() function, call updateLegs() before rendering
function animate() {
  stats.begin();
  updateLegs();
  renderer.render(scene, camera);
  stats.end();
  requestAnimationFrame(animate);
}

animate();
