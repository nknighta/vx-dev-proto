import React, {useEffect, useCallback} from 'react'
import { ChakraProvider ,
    Box ,
    Button ,
    Center} from '@chakra-ui/react'
import Box1 from "../contents/Object/TestObjects/ObjectTest";

export default function Index() {
    return (
        <ChakraProvider>
            <Box>
                <Box1/>
            </Box>
        </ChakraProvider>
    )
}
