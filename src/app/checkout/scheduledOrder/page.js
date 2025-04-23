import React from 'react'
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import Title from '../../../common/Title'
import DeliveryAddress from '../../../components/DeliveryAddress'
import LocationTitle from '../../../common/LocationTitle'
import SecondaryButton from '../../../common/SecondaryButton'
import Calender from "@/assets/svg/Calender.svg";
import Calender2 from "@/assets/svg/Calender2.svg";
import { Text } from '@chakra-ui/react'
import LocationSvg from "@/assets/svg/LocationSvg.svg";
import Image from "next/image"
import PrimaryButton from '../../../common/PrimaryButton'
import CartItem from '../../../common/CartItem'
import OutlinedExclamationMark from "@/assets/svg/OutlinedExclamationMark.svg"

const ScheduledOrder = () => {

    const cartItems = [
        { id: 0, resturantName: "Lunch box", itemName: "Brunch for 2 - Veg", price: "₹599" },
        { id: 1, resturantName: "Fasso", itemName: "Paneer Signature Rice Bowl (Regular)", price: "₹200" },
    ]

    return (
        <Box>
            <Container mx="auto" className="lg:!max-w-[84.4vw] !max-w-full">
                <Title title="Secure Checkout" />
                <Divider orientation='horizontal' className="!w-full !border-b-[--gray-300] !border-b !my-1" />
                <Box className="!my-10 !flex !flex-col xl:!flex-row md:!flex-col !gap-12">
                    <Box className="!flex-1">
                        <DeliveryAddress />
                        <LocationTitle title="Type of Order" src={LocationSvg} alt="location-image" />
                        <Box className="!flex xl:!flex-row md:!flex-row !flex-col !gap-6 !my-6">
                            <SecondaryButton src={Calender} alt="calender" title="Schedule Order" className="!bg-[--saffron-400] !text-white !py-[15px] !px-6" />
                            <SecondaryButton src={Calender2} alt="calender" title="Order Now" className="!border-[--saffron-400] !border-dashed !border-2 !text-[--gray-400] !py-[15px] !px-6" />
                            <SecondaryButton src={Calender2} alt="calender" title="Subscription" className="!border-[--saffron-400] !border-dashed !border-2 !text-[--gray-400] !py-[15px] !px-6" />
                        </Box>
                        <Box className="!flex lg:!flex-row md:!flex-row !flex-col !items-center !py-8 lg:!px-[7vw] md:!px-[7vw] !px-5 !gap-8">
                            <Box className="">
                                <Text className="Poppins500 !text-base !px-3">Date of delivery</Text>
                                <Box className="!flex !flex-row !gap-2 !pt-4 !px-3">
                                    <Image src={Calender2} alt="image" />
                                    <Text className="Poppins500 !text-base !text-[--gray-300]">03/11/2022</Text>
                                </Box>
                                <Divider orientation='horizontal' className="!w-full !border-b-[--gray-300] !border-b-2 !my-1" />
                            </Box>
                            <Box className="!flex !flex-row !gap-1">
                                <Box>
                                    <Text className="Poppins500 !text-base">Time of delivery</Text>
                                    <Box className="!flex !flex-row !gap-2 !pt-4 !px-6">
                                        <Image src={Calender2} alt="image" />
                                        <Text className="Poppins500 !text-base !text-[--gray-300]">16:30</Text>
                                    </Box>
                                    <Divider orientation='horizontal' className="!w-full !border-b-[--gray-300] !border-b-2 !my-1" />
                                </Box>
                                <Text className="Poppins500 !text-base !text-[--saffron-400] !py-7">24 hrs</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="!bg-[--gray-100] xl:!w-[415px] md:!w-[415px] !w-full !p-6 !rounded-[10px]">
                        <Box className="!flex !justify-between">
                            <Text className="Poppins500 !text-2xl !text-[--black-400]">Cart</Text>
                            <Text className="Poppins500 !text-base !text-[--black-400]">2 Items</Text>
                        </Box>
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                resturantName={item.resturantName}
                                itemName={item.itemName}
                                price={item.price}
                            />
                        ))}
                        <Text className="Poppins400 !text-sm !text-[--gray-300] !py-1">Bill details</Text>
                        <Box className="!flex !justify-between !py-1">
                            <Text className="Poppins400 !text-sm !text-[--gray-300]">Item Total</Text>
                            <Text className="Poppins400 !text-sm !text-[--gray-300]">₹799.00</Text>
                        </Box>
                        <Box className="!flex !justify-between !py-1">
                            <Box className="!flex !flex-row !gap-1" >
                                <Text className="Poppins400 !text-sm !text-[--gray-300]">Delivery Fee | 12.9 kms<Text> Custom Delivery time</Text></Text>
                                <Image src={OutlinedExclamationMark} alt="image" />
                            </Box>
                            <Text className="Poppins400 !text-sm !text-[--gray-300] !pt-2">₹131.00</Text>
                        </Box>
                        <Box className="!flex !justify-between !py-1">
                            <Box className="!flex !flex-row !gap-1" >
                                <Text className="Poppins400 !text-sm !text-[--gray-300]">Taxes and Charges</Text>
                                <Image src={OutlinedExclamationMark} alt="image" />
                            </Box>
                            <Text className="Poppins400 !text-sm !text-[--gray-300]">₹2.0</Text>
                        </Box>
                        <Box className="!flex !justify-between !mt-6">
                            <Text className="Poppins500 !text-2xl !leading-9 ">Total</Text>
                            <Text className="Poppins500 !text-2xl !leading-9 ">₹932.00</Text>
                        </Box>
                        <Box className="!flex !justify-center">
                            <PrimaryButton title="Proceed To Payment" className="!bg-[--saffron-400] !w-full !text-white !rounded-[10px] !text-base Poppins500 !py-3 !my-4" />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ScheduledOrder
