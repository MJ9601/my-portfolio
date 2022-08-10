import React, { Key } from "react";
import { curvesPoints } from "../../../data/paths";
import * as THREE from "three";
import { Line } from "@react-three/drei";

const Lines = () => {
  return (
    <group>
      <mesh>
        {Object.keys(curvesPoints).map((key) => (
          <Line
            // @ts-ignore
            points={curvesPoints[key] as THREE.Vector3[]}
            key={key}
            color={0xff0000}
          ></Line>
        ))}
      </mesh>
    </group>
  );
};

export default Lines;
