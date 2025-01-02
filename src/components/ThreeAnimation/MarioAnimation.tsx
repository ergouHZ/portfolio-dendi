"use client"
import { Box } from '@mui/material'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { degToRad } from 'three/src/math/MathUtils.js'
import { Mario } from '../../models/Mario'

//TODO:启用suspense懒加载的时候，可能和模型内部的preload有冲突，会报错，移除懒加载可以用


export default function MarioAnimation() {
  const [isRotating, setIsRotating] = useState(true);
  const [autoSpeed, setAutoSpeed] = useState(8); //I want a damping effect on the auto rotation at the beginning

  const [modelSettings, setModelSettings] = useState({
    scale: [1.0, 1.0, 1.0],
    position: [0, -3.5, -1.5],
    rotation: [0, 0, 0]
  })

  useEffect(() => {
    const adjustModelForScreenSize = () => {
      let screenScale = [1.4, 1.4, 1.4]

      if (window.innerWidth < 768) {
        screenScale = [1.5, 1.5, 1.5]
      }
      setModelSettings({
        scale: screenScale,
        position: [0, -8, -13],
        rotation: [0, 0, 0]
      })
    }

    adjustModelForScreenSize()
  }, [])

  return (
    <Box sx={{
      height: '300px',
    }}>
      {/* {the camera is the render range} */}
      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, -4, -8]} angle={0.5} />
        {/* <Suspense fallback={<Loader />}> */}
          <directionalLight
            rotation={[degToRad(20), degToRad(30), 1]}
            intensity={2} />

          <ambientLight intensity={1} />
          <hemisphereLight
            groundColor={"rgb(255,255,255"}
            color={"#99f8ff"}
            intensity={1.8}
          />

          <Mario
            position={modelSettings.position}
            scale={modelSettings.scale}
            rotation={modelSettings.rotation}
            setIsRotating={setIsRotating}
            isRotating={isRotating}
            autoSpeed={autoSpeed}  // 自转速度，越大自转越快，越小自转越慢
            setAutoSpeed={setAutoSpeed}
          />

          <OrbitControls
            enableZoom={true}
            maxZoom={1.2}
            minZoom={0.8}
            zoomSpeed={0.65}
            enableRotate={true}
            rotateSpeed={0.45}
            target={[0, 0, -13]}
            autoRotate={isRotating}
            autoRotateSpeed={autoSpeed} //aoto rotation,damping in children components
          />

        {/* </Suspense> */}
      </Canvas>
    </Box>
  )
}
