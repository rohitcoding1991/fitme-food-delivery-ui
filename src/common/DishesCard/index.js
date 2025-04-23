"use client";
import React from 'react'
import { Card, Stack, CardBody, Text, Heading } from "@chakra-ui/react"
import Image from "next/image"
import { Box } from '@chakra-ui/react'

const DishesCard = ({ imageAlt, imageSrc, title, tag, price, time, timeAlt, timeSrc, priceAlt, priceSrc }) => {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            className="!bg-[--gray-100] lg:!p-0 !p-3 lg:!h-[178px] md:!h-[178px]"
        >
            <Box className="!flex !justify-center !pl-4 !items-center">
                <Image src={imageSrc} alt={imageAlt} className="!mx-4 !w-full" />
            </Box>
            <Stack>
                <CardBody className='!flex !flex-col !justify-center'>
                    <Heading className="Poppins500 !text-xl !text-[--black-400] !leading-[30px] !my-[3px]">{title}</Heading>
                    <Text className="Poppins500 !text-base !text-[--gray-300]">{tag}</Text>
                    <Box className="!flex !justify-between !my-3" >
                        <Box className="!flex !flex-row !gap-2">
                            <Image src={priceSrc} alt={priceAlt} />
                            <Text className="Poppins !text-base !text-[--black-400]">{price}</Text>
                        </Box>
                        <Box className="!flex !flex-row !gap-2">
                            <Image src={timeSrc} alt={timeAlt} />
                            <Text className="Poppins !text-base !text-[--black-400]">{time}</Text>
                        </Box>
                    </Box>
                </CardBody>
            </Stack>
        </Card>
    )
}

export default DishesCard
