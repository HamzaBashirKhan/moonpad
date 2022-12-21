import React from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

// import EarthDayMap from "../../assets/8k_earth_daymap.jpg";
// import EarthNormalMap from "../../assets/8k_earth_normal_map.jpg";
// import EarthSpecularMap from "../../assets/8k_earth_specular_map.jpg";
// import EarthCloudsMap from "../../assets/8k_earth_clouds.jpg";
import EarthNightMap from "../../images/bg3.jpg";
function Models() {
  const [cloudsMap] = useLoader(TextureLoader, [EarthNightMap]);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x9932cc, 0);
  camera.position.setY(-10);
  camera.position.setX(-30);
  camera.position.setZ(20);

  const earthGeometry = new THREE.SphereGeometry(8, 90, 90);
  const earthMaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    map: cloudsMap,
    opacity: 1,
  });
  const earth = new THREE.Mesh(earthGeometry, earthMaterial);
  earth.position.setX(-30);
  earth.position.setY(-10);

  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 40000;
  const postArray = new Float32Array(particlesCount * 100);

  for (let i = 0; i < particlesCount; i++) {
    postArray[i] = (Math.random() - 2.9) * 8 * ((Math.random() - 0.1) * 5);
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(postArray, 3)
  );
  const material = new THREE.PointsMaterial({
    size: 0.05,
  });
  const particlesMesh = new THREE.Points(particlesGeometry, material);

  scene.add(earth, particlesMesh);
  // const geometry2 = new THREE.BoxGeometry(10, 10, 0);
  // const material2 = new THREE.MeshBasicMaterial({
  //   color: 0x00ff00,
  //   map: cloudsMap,
  // });
  // const cube = new THREE.Mesh(geometry2, material2);
  // cube.position.setX(-40);
  // cube.position.setY(-20);
  // scene.add(cube);
  const pointLight = new THREE.PointLight(0xf5e371, 5);
  pointLight.position.set(45, 0, 15);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight, pointLight);

  // function addStar() {
  //   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  //   const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  //   const star = new THREE.Mesh(geometry, material);

  //   const [x, y, z] = Array(3)
  //     .fill()
  //     .map(() => THREE.MathUtils.randFloatSpread(100));

  //   star.position.set(x, y, z);
  //   scene.add(star);
  // }
  // Array(200).fill().forEach(addStar);
  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    console.log(t);
    // camera.rotation.x = t * 0.0001;
    // camera.rotation.y = t * 0.0009;

    earth.rotation.x = t * 0.001;
  }

  document.body.onscroll = moveCamera;
  document.addEventListener("mousemove", animateParticles);
  let mouseX = 0;
  let mouseY = 0;

  function animateParticles(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    const elapsedTime = clock.getElapsedTime();
    particlesMesh.position.x = mouseX * 0.009;
    particlesMesh.position.y = -mouseY * 0.009;
    // particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00008);
  }
  moveCamera();
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.005;
    // const elapsedTime = clock.getElapsedTime();
    // particlesMesh.rotation.y = -0.001 * elapsedTime;
    // particlesGeometry.rotation.x = mouseX;
    // pointLight.position.x += 0.1;

    // pointLight.position.y += 0.1;
    // pointLight.position.z += 0.1;
    // cube.position.x += 0.005;
    // cube.rotation.x += 1;
    // cube.position.y += 0.005;
    // torus.rotation.x += 0.01;
    // torus.rotation.y += 0.005;
    // torus.rotation.z += 0.01;

    renderer.render(scene, camera);
  }

  animate();

  return <div></div>;
}

export default Models;
