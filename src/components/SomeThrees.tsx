import { Stack, Typography } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { Box, Sphere } from '@react-three/drei'
import React, { useState } from 'react'

const SomeThrees = () => {
  const [enteredRdc, setEnteredRdc] = useState<boolean>(false)
  const [entered1stFlor, setEnteredFirstFloor] = useState<boolean>(false)
  return (
    <>
      <Typography>Canvas</Typography>
      <Stack direction="row" width="50%" margin="0 auto">
        <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <Box
              args={[5, 5, 5]}
              onPointerEnter={() => setEnteredRdc(true)} 
              onPointerLeave={() => setEnteredRdc(false)}  
            >
              <meshBasicMaterial color={enteredRdc ? "blue" : "red"} />
            </Box>
        </Canvas>
        <Canvas>
            <Box 
              args={[5, 5, 5]}
              onPointerEnter={() => setEnteredFirstFloor(true)} 
              onPointerLeave={() => setEnteredFirstFloor(false)}  
            >
              <meshBasicMaterial color={entered1stFlor ? "blue" : "green"} />
            </Box>
        </Canvas>
      </Stack>
    </>
  )
}

export default SomeThrees