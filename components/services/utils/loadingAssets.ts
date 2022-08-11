import * as THREE from "three";

export const loadingGeneralVideo = (videoSrc?: string) => {
  const videoElement = document.createElement("video");

  videoElement.src = videoSrc ? videoSrc : "./videos/starwars.mp4";
  videoElement.playsInline = true;
  videoElement.muted = true;
  videoElement.loop = true;
  videoElement.autoplay = true;
  videoElement.play();

  const videoTexture = new THREE.VideoTexture(videoElement);
  videoTexture.flipY = false;
  videoTexture.generateMipmaps = false;
  videoTexture.minFilter = THREE.NearestFilter;
  videoTexture.magFilter = THREE.NearestFilter;
  videoTexture.encoding = THREE.sRGBEncoding;

  const material = new THREE.MeshBasicMaterial({ map: videoTexture });

  return material;
};

export const loadingPic = (picSrc?: string) => {
  const imageTexture = new THREE.TextureLoader().load(
    picSrc ? picSrc : "./logo-720.png"
  );
  imageTexture.flipY = false;
  imageTexture.generateMipmaps = false;
  imageTexture.minFilter = THREE.NearestFilter;
  imageTexture.magFilter = THREE.NearestFilter;
  imageTexture.encoding = THREE.sRGBEncoding;

  const material = new THREE.MeshBasicMaterial({ map: imageTexture });

  return material;
};
