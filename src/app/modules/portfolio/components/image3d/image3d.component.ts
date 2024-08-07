import { Component, inject, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-image3d',
  standalone: true,
  imports: [],
  templateUrl: './image3d.component.html',
  styleUrl: './image3d.component.scss'
})
export class Image3dComponent {
  windows = inject(Window);

  ngOnInit() {
    this.image3D();
  }

  image3D() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, 300);
    document.getElementById('image3d')!.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    loader.load('./assets/logo/logo-icon-high.png', (texture) => {
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    });
  }
}
