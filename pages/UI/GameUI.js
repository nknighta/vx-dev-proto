import React from 'react'
import {ChakraProvider ,Button} from "@chakra-ui/react";

function LinkButton (props){
    const link = props.link;
    const name = props.name;
    return <Button as={'a'} href={props.link}>{props.name}</Button>
}

export default function GameUI () {
    return(
        <ChakraProvider>
            <LinkButton link={'../'} name={'back to index'}/>
        </ChakraProvider>
    )
}