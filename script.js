
gsap.from(".animate", {
  duration: 1,
  y: -50,
  opacity: 0,
  stagger: 0.3,
  ease: "power2.out"
});

gsap.from("nav a", {
  duration: 1,
  opacity: 0,
  y: -20,
  delay: 1,
  stagger: 0.2
});
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
  alpha: true, 
  antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0xe11d48 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);


function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();


window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
