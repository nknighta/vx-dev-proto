import React, { useState, useRef } from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {Box, Link, Text} from "@chakra-ui/react";

const Box2= ({children}) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <mesh
            ref={ref}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
        >
            <boxBufferGeometry args={ [1, 1, 1]} />
            <meshLambertMaterial color={ 0x44c2b5 } />{children}
        </mesh>
    );
};

const Floor = () => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <mesh
            ref={ref}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
        >
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color={ 2222222 } />
        </mesh>
    );
};

const Box3 = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default function MainDisplay() {
    const ObjectLayer = {
        position: 'absolute',
    }

    const CGUI = {
        position: 'absolute',
        marginTop: 830,
        marginLeft: 30,
        width: 350,
        height: 300,
    }

    const CGUI2 = {
        position: 'absolute',
        marginTop: 890,
        marginLeft: 430,
        width: 770,
        height: 200,
    }

    // SGUI is Status GameUser Interface

    const SGUI = {
        position: 'absolute',
        marginLeft:  1250,
        marginTop: 530,
        width: 300,
        height: 600,
    }
    const Layer1 = {
        position: 'absolute',
        marginTop: 0,
        marginLeft: 30,
        width: 50,
        height: 300,
        backgroundColor: '#000021'
    }

    const Layer2 = {
        position: 'absolute',
        marginTop: 0,
        marginLeft: 30,
        width: 750,
        height: 300,
    }

    return (
        <div>
            <Box>
            <Canvas dpr={2} camera={{
                position: [-6, 7, 7],
            }} style={Layer2}>
                <ambientLight intensity={0.5} />
                <directionalLight intensity={0.5} position={[-10, 10, 10]} />
                <Box2/>
                <Box3 position={[-1.2, 0, 0]} />
                <Box3 position={[1.2, 0, 0]} />
                <Box3 position={[1.2, 0, 0]} />
                <OrbitControls/>
                <Box3 position={[1.2, 0, 0]} />
                <Box3 position={[1.2, 0, 0]} />
            </Canvas>
            </Box>
            <div textColor={'#fff'}>
                <Box bgColor={'orange'}
                     h={1150}>
                    <Canvas
                        style={Layer1}
                        shadows={true}
                        camera={{
                            position:[-10, 7 ,7],
                        }}>

                    </Canvas>

                    <Box bgColor={'#000'}
                         textColor={'#fff'}
                         style={CGUI}>
                        <Text>Mini Maps</Text>
                    </Box>

                    <Box bgColor={'#000'}
                         textColor={'#fff'}
                         style={CGUI2}>
                        <Text>Test Teaxt</Text>
                    </Box>

                    <Box bgColor={'#000'}
                         textColor={'#fff222'}
                         style={SGUI}>
                        <Text>Test Text</Text>
                        <Link href={'../Main'}>aaa</Link>
                    </Box>
                </Box>
            </div>
        </div>
    );
}
