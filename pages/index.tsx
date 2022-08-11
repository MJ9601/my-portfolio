import { Canvas, useFrame } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";
import { Ref, useEffect, useRef } from "react";
import { Provider } from "react-redux";
import {
  PathLine,
  selectOrthCam,
  selectPath,
} from "../app/features/displaySlice";
import { store, useAppSelector } from "../app/store";
import ContactFrom from "../components/3d/ContactFrom";
import Controlers from "../components/3d/Controlers";
import Model3DWrapper from "../components/3d/Model3DWrapper";
import OwnerInfoDisplay from "../components/3d/OwnerInfoDisplay";
import ProjectDisplay from "../components/3d/ProjectDisplay";

const Home: NextPage = () => {
  const orthCamStatus = useAppSelector(selectOrthCam);
  const path = useAppSelector(selectPath);
  console.log(orthCamStatus);
  const canvasRef = useRef<HTMLCanvasElement>();

  // useEffect(() => {
  //   const resizingCanvas = () => {
  //     canvasRef.current!.height = innerHeight;
  //     canvasRef.current!.width = innerWidth;
  //   };

  //   window.addEventListener("resize", resizingCanvas);
  //   return () => window.removeEventListener("resize", resizingCanvas);
  // });

  return (
    <>
      <Head>
        <title>3D Portfilio</title>
        <link sizes="32x32" rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <div className="relative ">
        <Canvas className="canvas" ref={canvasRef as Ref<HTMLCanvasElement>}>
          <Provider store={store}>
            <Model3DWrapper />
          </Provider>
        </Canvas>
        <Controlers />
        {path == PathLine.laptop && orthCamStatus && <ContactFrom />}
        {path == PathLine.monitors && orthCamStatus && <OwnerInfoDisplay />}
        {path == PathLine.tv && orthCamStatus && <ProjectDisplay />}
      </div>
    </>
  );
};

export default Home;
