import React from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@chakra-ui/react";
import Box from "./Box";
import Floor from "./Floor";
import LightBulb from './Light'
import OrbitControls from "./OrbitControls";

export default function TitleObjectIndex () {
    return(
        <div>
            <Text>TitleObject</Text>
            <Canvas
                shadows={true}
                camera={{
                    position:[-6,7,7],
                }}
                style={{
                    width: 1700,
                    height: 1000,
                }}>
                <ambientLight color={"white"} intensity={0.3} />
                <LightBulb position={[0, 3, 0]}  />
                <Box rotateX={3} />
                <Floor rotateX={13} rotateY={13} rotatZ={13}position={[0, -1, 0]} />
                <OrbitControls/>
            </Canvas>
        </div>
    )
}