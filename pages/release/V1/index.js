import React from "react";
import { Center, Text  , Box , Grid, GridItem ,} from "@chakra-ui/react";
import TesterButton from './App/Button'
import InterfaceTextL from "./App/Text";

export default function  V1 () {
    return(
        <Box p={0}>
            <Center>
            <InterfaceTextL text={'Welcome'}/>
            </Center>
            <Box bgColor={'#000011'}>
                <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                    <GridItem w='100%' h='600' bg='blue.500' >
                        <Center>
                            <Text>Pages</Text>
                        </Center>
                        <Center>
                            <TesterButton name={'Game'} link={'./release/V1/Game/A1'}/>
                        </Center>
                        <Center>
                            <TesterButton name={'aaa'}/>
                        </Center>
                    </GridItem>
                    <GridItem w='100%' h='600' bg='blue.500' bgImage="url('https://pbs.twimg.com/profile_images/1554384225050427398/Hik4RTG8_400x400.jpg')"
                              bgPosition="center"
                              bgRepeat="no-repeat">
                        <Center>
                            <Text>GameUI</Text>
                        </Center>
                        <Center>
                            <TesterButton name={'Game'} link={'./release/V1/Game/A1'}/>
                        </Center>
                        <Center>

                        </Center>
                    </GridItem>
                    <GridItem w='100%' h='600' bg='blue.500'>
                        <Center>
                            <Text>Use library site.</Text>
                        </Center>
                        <Center>
                            <TesterButton name={'ChakraUI'} link={'https://chakra-ui.com/'}/>
                        </Center>
                    </GridItem>
                    <GridItem w='100%' h='600' bg='blue.500' >
                        <Center>
                            <Text>Onject tester</Text>
                        </Center>
                        <Center>
                            <TesterButton name={'Object Test'} link={'./release/V1/Test/Test1'}/>
                        </Center>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}