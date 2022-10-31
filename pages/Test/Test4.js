import { ChakraProvider, Box, Flex, Text } from "@chakra-ui/react";

export default function Test4 () {
    return (
        <>
            <Box>
                <Text>NomalBox1</Text>
            </Box>
            <Box>
                <Text>NomalBox2</Text>
            </Box>
            <Box>
                <Text>NomalBox3</Text>
            </Box>
            <Flex>
                <Box bgColor={'yellow'}
                    w={'500px'}
                     h={'1000px'}>
                    <Text>FlexBox1</Text>
                </Box>
                <Box bgColor={'red'}
                     w={'1500px'}>
                    <Box bgColor={'skyblue'} h={70}>
                        <Text>FlexBox2</Text>
                    </Box>
                    <Box bgColor={'skyblue'} h={70}>
                        <Text>FlexBox2</Text>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}