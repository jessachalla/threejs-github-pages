
  import * as THREE from 'three';
  import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
  const scene = new THREE.Scene()

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
  wireframe: true
      })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(0, 1, 2)
  scene.add(camera)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enable = true
  document.body.appendChild(renderer.domElement)

  window.addEventListener(
  'resize',
        () => {
    camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  render()
        },
  false
  )

  const controls = new OrbitControls(camera, renderer.domElement)

  function animate() {
    requestAnimationFrame(animate)
        cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  controls.update()
  render()
      }

  function render() {
    renderer.render(scene, camera)
  }

  animate()
