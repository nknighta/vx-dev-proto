import React from 'react'
import {Link,
        Box,
        ChakraProvider,
        Text,
        Container} from "@chakra-ui/react";

// program entry point
// next page is MainGame

export default function Index (){
    return (
        <ChakraProvider>
            <Box
                w={1600}
                h={1150}
                bgColor={'#000034'}
                textColor={'#fff'}>
                <Text>aaa</Text>
                <Container>
                    <Box as={'button'}
                        bgColor={'#fff'}
                        textColor={'#000034'}
                        >
                        <Link href={'./Main'}
                            textDecoration={'none'}>aaa</Link>
                    </Box>
                </Container>
            </Box>
        </ChakraProvider>
    )
}