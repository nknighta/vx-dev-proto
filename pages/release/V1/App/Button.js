import {Button} from "@chakra-ui/react";
import React from "react";

function TesterButton (props){
    const link = props.link;
    const name = props.name;
    return(
        <Button as={'a'} href={link} >{name}</Button>
    )
}

export default TesterButton
