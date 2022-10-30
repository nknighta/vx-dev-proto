import { Canvas } from '@react-three/fiber'
import { Box } from "@chakra-ui/react";
import Floor from "./conponents/Floor";

export default function MainInterface () {

    return(
        <>
        Test feild
            <Box bgColor={'fff'}>
                <Canvas shadows={true}
                        camera={{
                            position: [-6, 7, 7]
                        }}>
                    <ambientLight color={"white"} intensity={0.3} />
                    <Floor/>
                </Canvas>
            </Box>
        </>
    )
}