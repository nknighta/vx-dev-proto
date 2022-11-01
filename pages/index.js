import { ChakraProvider } from "@chakra-ui/react";
import V1 from './release/V1'
export default function Index() {
    return (
            <ChakraProvider>
                <V1/>
            </ChakraProvider>
    )
}