import {
  OrthographicCamera,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";

import * as THREE from "three";
import { CameraHelper, Vector3 } from "three";
import {
  selectOrthCam,
  selectPath,
  setShowCompTrueAsync,
} from "../../app/features/displaySlice";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { Curves, curves, paths } from "../../data/paths";

const Camera = () => {
  const presCamRef = useRef<THREE.PerspectiveCamera>();
  const orthCamRef = useRef<THREE.OrthographicCamera>();
  const orthCamStatus = useAppSelector(selectOrthCam);
  const path = useAppSelector(selectPath);

  const dispatch = useAppDispatch();

  const { camera } = useThree();
  let pathProgress = 0;
  let positionVector = new Vector3(0, 0, 0);
  let lookAtVector = new Vector3(0, 0, 0);
  const newCurves = curves as Curves;

  let aspectRatio = innerWidth / innerHeight;

  useFrame(({ clock }) => {
    aspectRatio = innerWidth / innerHeight;
    // console.log(camera.position);
    pathProgress += 0.02;
    if (pathProgress > 1) pathProgress = 0.999;
    if (orthCamStatus) {
      orthCamRef.current!.position.copy(positionVector);
      newCurves![path!].getPointAt(pathProgress, positionVector);
      newCurves![path!].getPointAt(pathProgress + 0.0007, lookAtVector);
    }
    if (pathProgress === 0.99) {
      console.log(camera.position);
    }
    orthCamRef.current?.lookAt(lookAtVector);
  });
  useEffect(() => {
    if (orthCamStatus) {
      orthCamRef.current!.rotation.x = paths[path!].rotation!.x;
      orthCamRef.current!.rotation.y = paths[path!].rotation!.y;
      orthCamRef.current!.rotation.z = paths[path!].rotation!.z;

      orthCamRef.current!.zoom = 1;
      orthCamRef.current!.left = -paths[path!].frustrum;
      orthCamRef.current!.right = paths[path!].frustrum;
      orthCamRef.current!.top = paths[path!].frustrum / 2;
      orthCamRef.current!.bottom = -paths[path!].frustrum / 2;
    }
  }, [orthCamStatus]);
  // useHelper(orthCamRef, CameraHelper);
  return (
    <group>
      <PerspectiveCamera
        name="persCam"
        ref={presCamRef}
        makeDefault={!orthCamStatus}
        position={[-3.26, 3.448, 5.87]}
        zoom={0.9}
        aspect={innerWidth / innerHeight}
        fov={75}
        far={1000}
        near={0.1}
      />

      <OrthographicCamera
        name="orthCam"
        ref={orthCamRef}
        makeDefault={orthCamStatus}
        position={[-2.36, 3.248, 4.87]}
        args={[-2, 2, 5, 5, 0, 5]}
        zoom={100}
      />
    </group>
  );
};

export default Camera;
