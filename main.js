import './style.css'
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
const scene= new THREE.Scene();
const camera= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
const renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
const loader= new GLTFLoader();
loader.load('/atom.glb', function(gltf){
  scene.add(gltf.scene);
  
  gltf.scene.scale.set(0.005,0.005,0.005);
  const model=gltf.scene;
  model.position.set(-2.2,0.1,2);
  const ambientLight= new THREE.AmbientLight(0xffffff,0.5);
  scene.add(ambientLight);
  const spotLight= new THREE.SpotLight(0xffffff,0.5);
  spotLight.position.set(0,3,5);
  spotLight.target.position.set(0,3,0);
  scene.add(spotLight);
  scene.add(spotLight.target);
  const directionLight= new THREE.DirectionalLight(0xffffff,100);
  directionLight.position.set(0,1,0);
  directionLight.castShadow=true;
  scene.add(directionLight);
  const light= new THREE.PointLight(0xc4c4c4,10);
  light.position.set(0,300,500);
  scene.add(light);
  const light2= new THREE.PointLight(0xc4c4c4,10);
  light2.position.set(500,100,0);
  scene.add(light2);
  const light3= new THREE.PointLight(0xc4c4c4,10);
  light3.position.set(0,100,-500);
  scene.add(light3);
  const light4= new THREE.PointLight(0xc4c4c4,10);
  light4.position.set(-500,300,0);
  scene.add(light4);
  
  camera.position.z=5;
  function animate(){
    requestAnimationFrame(animate);
    
    gltf.scene.rotation.y+=0.01;
    gltf.scene.rotation.x+=0.01;
    gltf.scene.rotation.z+=0.01;
    renderer.render(scene,camera);
  }
  animate();
});
