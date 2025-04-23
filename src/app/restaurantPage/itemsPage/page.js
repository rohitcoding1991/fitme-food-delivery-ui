import React from 'react'
import { Box, Text, Container, Divider } from '@chakra-ui/react'
import OffersBanner from '../../../components/OffersBanner'
import Image from "next/image"
import AddedFood from "@/assets/svg/AddedFood.svg"
import PrimaryButton from '../../../common/PrimaryButton'
import CartItem from '../../../common/CartItem'
import Link from "next/link"
import SearchBar from '../../../common/SearchBar'
import SearchIcon from '@/assets/svg/SearchIcon.svg';
import SecondaryButton from '../../../common/SecondaryButton'
import StarOutlined from "@/assets/svg/StarOutlined.svg"

const ItemsPage = () => {

    const cartItems = [
        { id: 0, resturantName: "Lunch box", itemName: "Brunch for 2 - Veg", price: "₹599" },
        { id: 1, resturantName: "Fasso", itemName: "Paneer Signature Rice Bowl (Regular)", price: "₹200" },
    ]

    const recommended = [
        { id: 0, name: "Breakfast Box" },
        { id: 1, name: "Lunch Box" },
        { id: 2, name: "Combo Box" },
        { id: 3, name: "Biriyani Box" },
    ]

    return (
        <Box className="!mt-32 lg:!mt-0">
            <Box className="relative !mt-8">
                <OffersBanner className="relative" />
                <Box className="lg:flex md:flex hidden lg:flex-row gap-3 absolute -bottom-7 lg:!left-1/3 md:!left-1/4 z-10">
                    <SearchBar
                        placeholder="Search for dish"
                        src={SearchIcon}
                        size="lg"
                        InputGroupClass="lg:max-w-[22vw] bg-white rounded-[10px] md:max-w-[43vw] lg:ml-0 ml-8"
                        className="text-sm font-medium"
                    />
                    <SecondaryButton
                        src={StarOutlined}
                        alt="image"
                        title="Favourite"
                        titleClass="text-[--gray-400]"
                        className="w-[150px] shadow-md bg-white pr-12 pl-3 py-2 rounded-[10px]"
                    />
                </Box>
            </Box>
            <Container mx="auto" className="!my-24 lg:!max-w-[84.4vw] !max-w-[90vw]">
                <Box className="!flex lg:!flex-row !flex-col xl:!gap-20 md:!gap-12 !gap-6">
                    <Box className="lg:!pl-[4vw]">
                        <Text className="text-[--saffron-400] text-base font-medium py-1 lg:!text-right !text-center">Recommended</Text>
                        {recommended.map((box) => (
                            <Text className="text-[--black-400] text-base font-medium py-1 lg:!text-right !text-center" key={box.id}>{box.name}</Text>
                        ))}
                    </Box>
                    <Divider orientation='vertical' className="!border-l-black !border-l-2 !h-[400px] !hidden lg:!inline" />
                    <Box className="!flex lg:!flex-row lg:!gap-10 md:!gap-6 !flex-col !mt-3">
                        <Box className="lg:!w-[28vw] !w-full">
                            <Text className="Poppins500 !text-xl  lg:!text-left !text-center !leading-[30px] !text-[--black-400] !py-2 ">Brunch for 2 - Veg (Save upto Rs.45)</Text>
                            <Text className="!font-normal !text-base  lg:!text-left !text-center !leading-[19.36px]">₹599</Text>
                            <Text className="!font-normal !text-base !leading-[22px] lg:!text-left !text-center !text-[--gray-300]">Brunch: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!</Text>
                        </Box>
                        <Box className="!relative lg:!my-0 md:!my-0 !my-4">
                            <Image src={AddedFood} alt="added-image" />
                            <Box className="!flex lg:!items-center lg:!justify-center lg:mx-0 !mx-7">
                                <PrimaryButton className="!absolute !top-[14.7vh] !text-[--green-300] Poppins500 !shadow-lg !text-base !py-3 !px-5 !bg-white !rounded-[10px]" title="Add +" />
                            </Box>
                        </Box>
                    </Box>
                    <Box className="lg:!w-[20vw] !w-full !my-2">
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
                        <Box className="!flex !justify-between !mt-6">
                            <Text className="Poppins500 !text-2xl !leading-9 ">Subtotal</Text>
                            <Text className="Poppins500 !text-2xl !leading-9 ">₹799</Text>
                        </Box>
                        <Text className="Poppins400 !text-sm !text-[--gray-300] ">Extra charges may apply</Text>
                        <Box className="!flex !justify-center">
                            <Link href="/checkout/subscription">
                                <PrimaryButton title="Checkout" className="!bg-[--saffron-400] !text-white !rounded-[10px] !text-2xl Poppins500 lg:!px-[6.86vw] lg:!py-4 !px-[26vw] !py-3 !my-10" />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Container >
        </Box>
    )
}

export default ItemsPage
