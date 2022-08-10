import { OrbitControls, Stars, useAspect } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { selectOrthCam } from "../app/features/displaySlice";
import { useAppSelector } from "../app/store";
import Camera from "./services/Camera";
import Lights from "./services/Lights";
import { Model } from "./services/Model2";
import Lines from "./services/utils/lines";

const Model3DWrapper = () => {
  // useAspect(window.innerWidth, window.innerHeight, 0.5);
  const orthCamStatus = useAppSelector(selectOrthCam);
  return (
    <group>
      <OrbitControls />
      <Lights />
      <Camera />
      {!orthCamStatus && (
        <Stars count={1000} factor={5} depth={100} speed={0.1} />
      )}
      <ambientLightProbe args={[0xffffff, 0.1]} />
      {/* <Lines /> */}
      <Model />
    </group>
  );
};

export default Model3DWrapper;
