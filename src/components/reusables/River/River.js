import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./styles.scss";

const River = () => {
  const refContainer = useRef(null);
  let scene, camera, renderer, river;
  const loader = new GLTFLoader();

  const animate = () => {
    requestAnimationFrame(animate);
    camera.position.z += -0.001;
    renderer.render(scene, camera);
  };

  const loadModel = () => {
    loader.load("assets/models/river-scene.glb", function (gltf) {
      river = gltf.scene;
      scene.add(river);
      river.scale.set(3, 3, 3);
      river.rotation.y = Math.PI / 2;
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

    loadModel();
    addLight();

    camera.position.z = 3.1;
    camera.position.y = -0.5;
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

export default River;
