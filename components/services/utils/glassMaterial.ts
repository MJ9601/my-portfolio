import * as THREE from "three";

export const glassMaterial = (color: number) => {
  const material = new THREE.MeshPhysicalMaterial();
  material.color.set(color);
  material.ior = 3;
  material.transmission = 1;
  material.opacity = 1;
  material.roughness = 0;
  material.side = THREE.DoubleSide;

  return material;
};
