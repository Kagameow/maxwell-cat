import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import maxwell from './assets/maxwell-the-cat-dingus/scene.gltf?url';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.background = new THREE.Color(0xFFFFFF);
camera.position.z = 40;
camera.position.y = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
ambientLight.castShadow = true;
scene.add(ambientLight);

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

const glTFLoader = new GLTFLoader();

glTFLoader.load(maxwell, async function (gltf) {
    scene.add(gltf.scene);
    renderer.render( scene, camera );
    console.log(gltf);
},undefined, function ( error ) {
    console.error( error );
});

function animate() {
    scene.rotation.y += 0.01;
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
