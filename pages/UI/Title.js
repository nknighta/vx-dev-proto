import React from 'react'
import {
    Link,
    Box,
    ChakraProvider,
    Text,
    Container, Flex, Button
} from "@chakra-ui/react";

import Box1 from "../contents/Object/TitleObjects/ObjectTest";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";


// next page is MainGame

export default function Title (){
    return (
        <ChakraProvider>
            <Box>
                <Flex>
                    <Box bgColor={'yellow'}
                         w={'500px'}
                         h={'1000px'}>
                        <Text>FlexBox1</Text>
                        <Text>Welcome to V!</Text>
                        <Link href={'./Main'}
                              textDecoration={'none'}>
                            <Button>Main.js</Button>
                        </Link>
                    </Box>
                    <Box bgColor={'red'}>
                        <Box1/>
                    </Box>
                </Flex>
            </Box>

        </ChakraProvider>
    )
}