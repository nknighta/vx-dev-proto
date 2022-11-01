import React from 'react'
import { Center, Text } from '@chakra-ui/react'

export default function InterfaceTextL (props) {
    const text = props.text;
    return(
        <Center>
            <Text fontSize={60}>{text}</Text>
        </Center>
    )
}

export function InterfaceTextM (props) {
    const text2 = props.text2;
    return(
        <Center>
            <Text fontSize={30}>{text2}</Text>
        </Center>
    )
}

export function InterfaceTextS () {
    return(
        <Center>
            <Text fontSize={20}></Text>
        </Center>
    )
}