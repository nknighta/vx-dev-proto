import React, {useEffect, useCallback} from 'react'
import { ChakraProvider ,
    Box ,
    Button ,
    Center} from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Index() {
    return (
        <ChakraProvider>
            <Box>
                <Box>
                    <NextLink href="./MainGame/MainInterface">
                        <Button bgColor={'#000'}>as=a button</Button>
                    </NextLink>
                    <NextLink href="../">
                        <Button bgColor={'#000'}>Back</Button>
                    </NextLink>
                </Box>
            </Box>
        </ChakraProvider>
    )
}
