import React from "react";
import { Canvas } from "@react-three/fiber";
import {Box, Link} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

export default function MainInterface () {
    const CanvasStyle = {
        position: 'absolute',
    }

    // CGUI is Chat GameUser Interface

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


    // canvas is first layer
    // Boxs is second layer

    return (
        <div textColor={'#fff'}>
            <Box bgColor={'orange'}
                 h={1150}>
                <Canvas
                    style={CanvasStyle}
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
    )
}