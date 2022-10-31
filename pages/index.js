import Title from './UI/Title'
import { ChakraProvider } from "@chakra-ui/react";

export default function Index () {
    return(
        <ChakraProvider>
            <Title/>
        </ChakraProvider>
    )
}