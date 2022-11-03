import React from 'react'
import { LinkBox, LinkOverlay , Text, Heading, Box, ChakraProvider} from '@chakra-ui/react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'

export default function Test1 () {
    return (
        <ChakraProvider>
            <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                    13 days ago
                </Box>
                <Heading size='md' my='2'>
                    <LinkOverlay href='#'>
                        New Year, New Beginnings: Smashing Workshops & Audits
                    </LinkOverlay>
                </Heading>
                <Text>
                    Catch up on what’s been cookin’ at Smashing and explore some of the most
                    popular community resources.
                </Text>
            </LinkBox>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </ChakraProvider>
    )
}