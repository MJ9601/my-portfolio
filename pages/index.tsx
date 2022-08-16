import { Canvas, useFrame } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Ref, Suspense, useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import {
  PathLine,
  selectActiveLoader,
  selectOrthCam,
  selectPath,
} from "../app/features/displaySlice";
import { store, useAppSelector } from "../app/store";
import ContactFrom from "../components/3d/ContactFrom";
import Controlers from "../components/3d/Controlers";
import Model3DWrapper from "../components/3d/Model3DWrapper";
import OwnerInfoDisplay from "../components/3d/OwnerInfoDisplay";
import ProjectDisplay from "../components/3d/ProjectDisplay";
import Loader from "../components/Loader";

const Home: NextPage = () => {
  const orthCamStatus = useAppSelector(selectOrthCam);
  const path = useAppSelector(selectPath);
  console.log(orthCamStatus);
  const canvasRef = useRef<HTMLCanvasElement>();
  const router = useRouter();
  const loaderStatus = useAppSelector(selectActiveLoader);

  useEffect(() => {
    if (window.innerWidth < 580) {
      router.push("/2d");
    }
    // const updateLoaderStatus = async () => {
    //   setTimeout(() => {
    //     setActiveLoader(false);
    //   }, 3000);
    // };

    // updateLoaderStatus();
    // window.addEventListener("resize", resizingCanvas);
    // return () => window.removeEventListener("resize", resizingCanvas);
  }, []);

  return (
    <>
      <Head>
        <title>3D Portfilio</title>
        <link sizes="32x32" rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <div className="relative ">
        <Canvas className="canvas" ref={canvasRef as Ref<HTMLCanvasElement>}>
          <Suspense fallback={<Loader />} />
          <Provider store={store}>
            <Model3DWrapper />
          </Provider>
        </Canvas>
        {!loaderStatus ? (
          <>
            <Controlers />
            {path == PathLine.laptop && orthCamStatus && <ContactFrom />}
            {path == PathLine.monitors && orthCamStatus && <OwnerInfoDisplay />}
            {path == PathLine.tv && orthCamStatus && <ProjectDisplay />}
            <div className="absolute bottom-3 right-5 ">
              <Link
                href="/2d"
                className="px-4 py-1 text-2xl text-white font-extrabold animate-pulse ring-1 rounded-lg ring-white hover:text-cyan-400 hover:ring-cyan-400"
              >
                2D
              </Link>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Home;
