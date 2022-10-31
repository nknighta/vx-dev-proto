import React from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@chakra-ui/react";
import Floor from "./Floor";

export default function TitleObjectIndex () {
    return(
        <div>
            <Text>TitleObject</Text>
            <Canvas
                shadows={true}
                camera={{
                    position:[-6,7,7]
                }}
                style={{
                    width: 1700,
                    height: 1000,
                }}>
                <ambientLight color={"white"} intensity={0.3} />
                <Floor/>
            </Canvas>
        </div>
    )
}