import React from 'react'
import { Container, Box, Text, Divider } from '@chakra-ui/react'
import LunchBox from "@/assets/svg/LunchBox.png"
import Image from "next/image"
import GreenStar from "@/assets/svg/GreenStar.svg"
import OfferSvg from "@/assets/svg/Offer.svg"

const OffersBanner = () => {
    return (
        <Box className="bg-[--black-400] xl:!h-[313px] !h-full !py-6 !px-4 !flex !justify-center !items-center">
            <Box className="!flex lg:!flex-row !flex-col lg:!gap-[4.5vw] !gap-4">
                <Image src={LunchBox} alt="food-image" />
                <Box className="!flex !flex-col !justify-center">
                    <Text className="Poppins600 !text-[32px] !text-white">LunchBox - Meals and Thalis</Text>
                    <Text className="Poppins400 !text-base !text-white !py-3">North Indian, Punjabi</Text>
                    <Box className="!flex !justify-between ">
                        <Box>
                            <Box className="!flex !flex-row !gap-2">
                                <Image src={GreenStar} alt="star" />
                                <Text className="lg:!text-base md:!text-base !text-sm Poppins500 !text-white !pt-[1px]">4.0</Text>
                            </Box>
                            <Text className="Poppins500 lg:!text-base md:!text-base !text-sm !text-white">100+ ratings</Text>
                        </Box>
                        <Divider orientation='vertical' className="!border-l-white !border-l" />
                        <Box>
                            <Text className="Poppins500 lg:!text-base md:!text-base !text-sm !text-white !text-center">30 Mins</Text>
                            <Text className="Poppins500 lg:!text-base md:!text-base !text-sm !text-white !text-center">Delivery Time</Text>
                        </Box>
                        <Divider orientation='vertical' className="!border-l-white !border-l" />
                        <Box>
                            <Text className="Poppins500 lg:!text-base md:!text-base !text-sm !text-white !text-center">₹200</Text>
                            <Text className="Poppins500 lg:!text-base md:!text-base !text-sm !text-white !text-center">Cost for two</Text>
                        </Box>
                    </Box>
                </Box>
                <Box className="!border-dashed !border-2 !p-5 lg:!ml-24 lg:!mt-16 md:!mb-4 !rounded-[20px] !border-[--saffron-400]">
                    <Text className="!text-[--saffron-400] !text-2xl !leading-9">Offers</Text>
                    <Box className="!flex !flex-row !gap-2 !py-4">
                        <Image src={OfferSvg} alt="offer-image" />
                        <Text className="Poppins500 !text-base !text-white ">50% off up to ₹100 | Use code TRYNEW</Text>
                    </Box>
                    <Box className="!flex !flex-row !gap-2">
                        <Image src={OfferSvg} alt="offer-image" />
                        <Text className="Poppins500 !text-base !text-white !py-4">20% off | Use code PARTY</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OffersBanner
