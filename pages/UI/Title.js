import React ,{ useRef }from 'react'
import {
    Link,
    Box,
    ChakraProvider,
    Text, Flex, Button, Grid , GridItem
} from "@chakra-ui/react";
// next page is MainGame

import ObjectTest from "../contents/Object/TitleObjects/ObjectTest";

 function LinkButton (props){
    const link = props.link;
    const name = props.name;
    return <Button as={'a'} href={props.link}>{props.name}</Button>
}

export default function Title (){
    return (
        <ChakraProvider>
            <Box>
                <Flex>
                    <ObjectTest/>
                </Flex>
            </Box>
            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem colSpan={2} bg='papayawhip' >
                    <LinkButton link={'./'} name={'aa'}/>
                    <LinkButton link={'./UI/GameUI'} name={'Start!'}/>
                </GridItem>
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={4} bg='tomato' />
            </Grid>

        </ChakraProvider>
    )
}