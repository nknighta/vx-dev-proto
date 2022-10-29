import { ChakraProvider } from "@chakra-ui/react";
import Title from "./main/Title";

export default function  Index () {
    return (
        <ChakraProvider>
            <Title/>
        </ChakraProvider>
    )
}