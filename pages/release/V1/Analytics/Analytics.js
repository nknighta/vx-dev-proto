import React from "react";
import { Card, Text, Metric, Flex, ProgressBar} from "@tremor/react";
export default function Analytics (){
    return (
        <>
            <p>analytics page</p>
            <Card maxWidth="max-w-sm">
                <Text>Sales</Text>
                <Metric>$ 71,465</Metric>
                <Flex marginTop="mt-4">
                    <Text>62% of annual target</Text>
                    <Text>$ 225,000</Text>
                </Flex>
                <ProgressBar percentageValue={62} marginTop="mt-2" />
            </Card>
        </>
    )
}