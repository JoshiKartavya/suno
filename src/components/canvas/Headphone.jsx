import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Headphone = () => {
  const headphone = useGLTF("./3d/headphone.glb");

  return (
    <primitive object={headphone.scene} scale={4} position-y={0} rotation-y={0} />
  );
};

const HeadPhoneCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: false }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 70,
        position: [8, 10, 4],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
            <Headphone />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default HeadPhoneCanvas;