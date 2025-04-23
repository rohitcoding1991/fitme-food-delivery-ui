"use client";
import React from 'react'
import { Box } from '@chakra-ui/react'
import { Container, Text } from '@chakra-ui/react'
import TagSvg from "@/assets/svg/TagSvg.svg"
import Image from "next/image"
import SearchBar from '../../common/SearchBar'
import PrimaryButton from '../../common/PrimaryButton'
import Link from "next/link"

const Banner = () => {
    return (
        <Box className="bg-[--saffron-400] lg:!h-[200px] !h-full !flex !justify-center !items-center">
            <Container mx="auto" className="!my-24 xl:!max-w-[62.4vw] lg:!pt-9 !max-w-full">
                <Box className="!flex !justify-center xl:!flex-row !items-center !flex-col !gap-6 !mb-8">
                    <Box className="!flex !flex-row !gap-2">
                        <Text className="Poppins600 !text-2xl !text-white">Search by Restaurant</Text>
                        <Image src={TagSvg} alt="tag-image" />
                    </Box>
                    <SearchBar placeholder="Enter item or restaurant you are looking for" _placeholder={{ color: 'white', fontSize: "14px" }} size="lg" InputGroupClass="lg:!max-w-[33.7vw] md:!max-w-[50vw] !w-full !border-white !text-white" />
                    <Link href="/searchedresult">
                        <PrimaryButton className="!bg-[--black-400] !text-white lg:!px-[1.4vw] !my-[3px] lg:!py-[14px] !py-3 !px-4 !font-semibold !text-sm !rounded-[10px]" title="Search Now" />
                    </Link>
                </Box>
            </Container>
        </Box>
    )
}

export default Banner
