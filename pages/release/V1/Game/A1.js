import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import TesterButton from "../App/Button";

export default function GameIndex () {
    return(
        <ChakraProvider>
            GamePage
            <TesterButton name={'back'} link={'../../../'}/>
        </ChakraProvider>
    )
}