import React from 'react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import Image from "next/image"

const LocationTitle = ({ title, src, alt, className }) => {
    return (
        <Box className="!flex !flex-row !gap-3">
            <Image src={src} alt={alt} width={25.14} height={32} />
            <Text className="Poppins600 !text-2xl !leading-9">{title}</Text>
        </Box>
    )
}

export default LocationTitle
