"use client";
import React from 'react'
import { Card, CardBody, Heading, Stack, Text, Box } from '@chakra-ui/react'
import Image from "next/image"

const Cards = ({ imageAlt, imageSrc, title, tag, starAlt, starSrc, rating, alt, src, usersSrc, className, usersAlt, subTitle2, subTitle }) => {
    return (
        <Card className={`${className} !rounded-[10px] xl:!max-w-[36.62vw] lg:!max-w-[40vw] md:!max-w-[40vw] !w-full !mx-auto`}>
            <CardBody>
                <Box className="!flex !justify-center">
                    <Image src={imageSrc} alt={imageAlt} className='!w-full'/>
                </Box>
                <Stack mt='6' spacing='3' className='!px-4'>
                    <Heading className="Poppins500 !text-xl !leading-[30px] !text-[--black-400]">{title}</Heading>
                    <Box className="!flex !justify-between !my-2">
                        <Text className="Poppins500 !text-base !text-[--gray-300]">{tag}</Text>
                        <Box className="!flex !flex-row !gap-2">
                            <Image src={starSrc} alt={starAlt} />
                            <Text className="Poppins !text-base !text-[--black-400]">{rating}</Text>
                        </Box>
                    </Box>
                    <Box className="!flex !justify-between !mt-2">
                        <Box className="!flex !flex-row !gap-2">
                            <Image src={src} alt={alt} />
                            <Text className="Poppins !text-base !text-[--black-400]">{subTitle}</Text>
                        </Box>
                        <Box className="flex !flex-row gap-2">
                            <Image src={usersSrc} alt={usersAlt} />
                            <Text className="Poppins !text-base !text-[--black-400]">{subTitle2}</Text>
                        </Box>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default Cards
