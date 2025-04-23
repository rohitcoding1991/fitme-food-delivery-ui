import React from 'react'
import { Card, CardBody, Text, Stack } from "@chakra-ui/react"
import Image from "next/image"

const LocationCard = ({ className,textClass,src,address }) => {
    return (
        <Card maxW='sm' className={`${className}`}>
            <CardBody>
                <Image
                    src={src}
                    alt='image'
                />
                <Stack mt='6' spacing='3'>
                    <Text className={` ${textClass} Poppins500 !text-base`}>
                        {address}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default LocationCard
