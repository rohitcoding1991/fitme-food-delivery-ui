import React from 'react'
import { Box } from '@chakra-ui/react'
import Image from "next/image"

const SecondaryButton = ({ src, alt, title, titleClass, className }) => {
  return (
    <Box className={`${className} !flex !flex-row !gap-3 !rounded-[10px]`}>
      <Image src={src} alt={alt} />
      <button className={`${titleClass} Poppins500 !text-base`}>{title}</button>
    </Box>
  )
}

export default SecondaryButton
