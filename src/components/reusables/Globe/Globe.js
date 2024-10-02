import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./styles.scss";

const Globe = () => {
  const refContainer = useRef(null);
  let scene, camera, renderer, globe;
  const loader = new GLTFLoader();

  const animate = () => {
    requestAnimationFrame(animate);
    globe.rotation.x += 0.003;
    globe.rotation.y += 0.003;
    renderer.render(scene, camera);
  };

  const loadGlobe = () => {
    loader.load("assets/models/lowpoly_origami_planet_earth.glb", function (gltf) {
      globe = gltf.scene;
      scene.add(globe);
      animate();
    });
  };

  const addLight = () => {
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
  };

  const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    refContainer.current && refContainer.current.appendChild(renderer.domElement);

    loadGlobe();
    addLight();

    camera.position.z = 10;
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  useEffect(() => {
    if (scene == undefined) {
      init();
      window.addEventListener("resize", onWindowResize, false);
    }

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div id="canvas" ref={refContainer} className="position-absolute"></div>;
};

export default Globe;
