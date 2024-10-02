import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./styles.scss";

const Globe = ({ }) => {
  const refContainer = useRef(null);
  let scene, camera, renderer, cube;

  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    refContainer.current && refContainer.current.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    animate();
  };

  useEffect(() => {
    if (window.threeSceneLoaded === true) return;
    init();
    window.threeSceneLoaded = true;
  }, []);

  return <div id="canvas" ref={refContainer} className="position-absolute"></div>;
};

export default Globe;
