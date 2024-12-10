import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";



export default function DogAnimation() {
  return (
    <Box>
      {/* {the camera is the render range} */}
      <Canvas camera={{near:0.1,far:1000}}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.5} />
        <Suspense fallback={<Loader/>}>
          
        </Suspense>
      </Canvas>
    </Box>
  )
}