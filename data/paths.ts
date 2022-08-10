import * as THREE from "three";

export type Paths = {
  monitors: {
    position: THREE.Vector3[];
    rotation: THREE.Vector3;
    frustrum: number;
  };
  phone: {
    position: THREE.Vector3[];
    rotation: THREE.Vector3;
    frustrum: number;
  };
  tv: {
    position: THREE.Vector3[];
    rotation: THREE.Vector3;
    frustrum: number;
  };
  laptop: {
    position: THREE.Vector3[];
    rotation: THREE.Vector3;
    frustrum: number;
  };
  tablet: {
    position: THREE.Vector3[];
    rotation: THREE.Vector3;
    frustrum: number;
  };
};

export type Curves =
  | {
      monitors: THREE.CatmullRomCurve3;
      phone: THREE.CatmullRomCurve3;
      tv: THREE.CatmullRomCurve3;
      laptop: THREE.CatmullRomCurve3;
      tablet: THREE.CatmullRomCurve3;
    }
  | undefined;

export const paths: Paths = {
  monitors: {
    position: [
      new THREE.Vector3(-5, 0, 8),
      new THREE.Vector3(-2, 3, 5),
      new THREE.Vector3(1.93, 0.57, 1),
      new THREE.Vector3(1.93, 0.57, 0.25),
    ],
    rotation: new THREE.Vector3(0, 0, 0),
    frustrum: 0.6,
  },
  phone: {
    position: [
      new THREE.Vector3(-5, 0, 8),
      new THREE.Vector3(-2, 3, 5),
      new THREE.Vector3(2.6, 1.28, 0.29),
      new THREE.Vector3(2.6, 0.78, 0.29),
    ],
    rotation: new THREE.Vector3(-1.57, 0, -1.79),
    frustrum: 0.17,
  },
  laptop: {
    position: [
      new THREE.Vector3(-5, 0, 8),
      new THREE.Vector3(-2, 3, 5),
      new THREE.Vector3(2.27, 0.47, 0.82),
      new THREE.Vector3(2.77, 0.47, 0.82),
    ],
    frustrum: 0.18,
    rotation: new THREE.Vector3(0, 0, 0),
  },
  tablet: {
    position: [
      new THREE.Vector3(-5, 0, 8),
      new THREE.Vector3(-2, 3, 5),
      new THREE.Vector3(1.68, 0.86, 2.27),
      new THREE.Vector3(1.68, 0.16, 2.27),
    ],
    rotation: new THREE.Vector3(-1.57, 0, -1.06),
    frustrum: 0.17,
  },
  tv: {
    position: [
      new THREE.Vector3(-5, 0, 8),
      new THREE.Vector3(-2, 3, 5),
      new THREE.Vector3(1.14, 0.79, 2.55),
      new THREE.Vector3(2.48, 0.79, 2.55),
    ],
    frustrum: 0.82,
    rotation: new THREE.Vector3(0, 0, 0),
  },
};
export const curves: Curves | string =
  // @ts-ignore
  Object.keys(paths).reduce((pre, cur) => {
    if (cur !== "curves")
      return {
        ...pre,
        //@ts-ignore
        [cur]: new THREE.CatmullRomCurve3(paths[cur].position),
      };
  }, {});
export const curvesPoints =
  // @ts-ignore
  Object.keys(paths).reduce((pre, cur) => {
    if (cur !== "curves")
      return {
        ...pre,
        //@ts-ignore
        [cur]: new THREE.CatmullRomCurve3(paths[cur].position).getPoints(50),
      };
  }, {});
