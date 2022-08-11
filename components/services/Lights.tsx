import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import dat from "dat.gui";

const RectAreaLights = ({
  position,
  args,
}: {
  position: number[];
  args: number[];
}) => {
  const { scene, camera } = useThree();
  RectAreaLightUniformsLib.init();

  // const gui = {
  //   x: 0,
  //   y: 0,
  //   z: 0,
  // };

  // GUI.add(gui, "x", -500, 500, 0.1);
  // GUI.add(gui, "y", -500, 500, 0.1);
  // GUI.add(gui, "z", -500, 500, 0.1);

  const rectLight = new THREE.RectAreaLight(args[0], args[1], args[2], args[3]);
  rectLight.position.set(position[0], position[1], position[2]);
  rectLight.castShadow = true;
  scene.add(rectLight);
  rectLight.lookAt(0, 2, 0);
  // const axisHelper = new THREE.AxesHelper();
  // scene.add(axisHelper);

  const lightHelper = new RectAreaLightHelper(rectLight);

  // ************

  scene.add(lightHelper);
  // useFrame(() => {
  //   // rectLight.lookAt(newPointlight.position);
  // });
  return null;
};

const Lights = () => {
  return (
    <>
      <pointLight
        args={[0xffaa00, 1]}
        position={[1.16, 0.57, -0.13]}
        castShadow
        // shadow-camera-far={20}
        // shadow-mapSize={[1024, 1024]}
        // shadow-normalBias={0.05}
      />
      <pointLight
        args={[0xffaa00, 1]}
        position={[2.99, 0.57, 0.43]}
        castShadow
        // shadow-camera-far={20}
        // shadow-mapSize={[1024, 1024]}
        // shadow-normalBias={0.05}
      />
      <pointLight
        args={[0xfffaffe, 2]}
        position={[2.58, 1.6, -0.15]}
        castShadow
        // shadow-camera-far={20}
        // shadow-mapSize={[1024, 1024]}
        // shadow-normalBias={0.05}
      />

      <RectAreaLights
        args={[0xffffff, 6, 0.85, 0.47]}
        position={[0, 0.71, 0]}
      />
      {/* <rectAreaLight
        position={[0, 0.71, 0]}
        args={[0xffffff, 6, 0.85, 0.47]}
        onUpdate={(self) => self.lookAt(new Vector3(0, 2, 0))}
      /> */}
    </>
  );
};

export default Lights;
