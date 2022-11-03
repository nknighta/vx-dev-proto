import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import TesterButton from "../App/Button";
import Canvas from '../App/Assets/TestBox'

export default function GameIndex () {
    return(
        <ChakraProvider>
            GamePage
            <TesterButton name={'back'} link={'../../../'}/>
            <Canvas/>
        </ChakraProvider>
    )
}