import React from 'react';
import { Box, Container, Divider, Text } from '@chakra-ui/react';
import Title from '../../../common/Title';
import LocationTitle from '../../../common/LocationTitle';
import LocationSvg from "@/assets/svg/LocationSvg.svg";
import SecondaryButton from '../../../common/SecondaryButton';
import Calender from "@/assets/svg/Calender.svg";
import Calender2 from "@/assets/svg/Calender2.svg";
import DeliveryAddress from '../../../components/DeliveryAddress';
import PrimaryButton from '../../../common/PrimaryButton';
import TabTable from '../../../common/Tabs';
import { Textarea } from '@chakra-ui/react'
import CartItem from '../../../common/CartItem';
import Image from "next/image"
import Link from "next/link"
import OutlinedExclamationMark from "@/assets/svg/OutlinedExclamationMark.svg"

const Subscription = () => {
  const data = [
    { id: 0, tab: "16:30", src: Calender2 },
    { id: 1, tab: "24 hrs" },
  ];

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
              <Link href="/checkout/scheduledOrder"><SecondaryButton src={Calender} alt="calender" title="Subscription" className="!bg-[--saffron-400] !text-white !py-[15px] !px-6" /></Link>
              <SecondaryButton src={Calender2} alt="calender" title="Schedule Order" className="!border-[--saffron-400] !border-dashed !border-2 !text-[--gray-400] !py-[15px] !px-6" />
              <SecondaryButton src={Calender2} alt="calender" title="Order Now" className="!border-[--saffron-400] !border-dashed !border-2 !text-[--gray-400] !py-[15px] !px-6" />
            </Box>
            <Box className="!flex lg:!justify-between md:!justify-between lg:!flex-row md:!flex-row !flex-col !py-4">
              <Box className="">
                <Text className="Poppins500 !text-base !py-4">Type of subscription ?</Text>
                <Box className="!flex !flex-row !gap-6 !py-5">
                  <Box>
                    <Text className="Poppins500 !text-base !text-[--saffron-400] xl:!px-5 !p-2">Monthly</Text>
                    <Divider orientation='horizontal' className="!w-full !border-b-[--saffron-400] !border-b-[1.5px] !my-1" />
                  </Box>
                  <Box>
                    <Text className="Poppins500 !text-base  xl:!px-5 !p-2">Weekly</Text>
                    <Divider orientation='horizontal' className="!w-full !border-b-[--gray-400] !border-b-[1.5px] !my-1" />
                  </Box>
                  <Box>
                    <Text className="Poppins500 !text-base  xl:!px-5 !p-2">Custom</Text>
                    <Divider orientation='horizontal' className="!w-full !border-b-[--gray-400] !border-b-[1.5px] !my-1" />
                  </Box>
                </Box>
                <Text className="Poppins500 !text-base !py-4">What time do you want us to deliver?</Text>
                <TabTable />
              </Box>
              <Box>
                <Text className="Poppins500 !text-base !py-4">What’s the plan?</Text>
                <Box className="!flex !flex-row !gap-6 !py-4">
                  <PrimaryButton title="3-Days/Week" className="!border !border-[--saffron-400] Poppins500 !text-base !text-[--saffron-400] !rounded-[10px] !px-[25px] !py-[15px] " />
                  <PrimaryButton title="5-Days/Week" className="!border !border-black Poppins500 !text-base !rounded-[10px] xl:!px-[25px] xl:!py-[15px] md:!px-[25px] md:!py-[15px] !px-[15px] !py-[15px] " />
                </Box>
                <Text className="Poppins500 !text-base !py-4">Any Note for us?</Text>
                <Textarea placeholder='Type you note here' className="xl:!max-w-[365px] md:!max-w-[365px] !w-full !h-[100px] !overflow-auto !border-[1.5px] !border-[--gray-300]" />
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
            <Text className="!text-center !text-[--gray-400] Poppins500 !text-sm !py-8">Monthly + 3 Days/Week plan +  16:30 Delivery time</Text>
            <Box className="!flex !justify-between !py-1">
              <Text className="Poppins400 !text-sm !text-[--gray-300]">Total</Text>
              <Text className="Poppins400 !text-sm !text-[--gray-300]">₹11,400.00</Text>
            </Box>
            <Box className="!flex !justify-between !py-1">
              <Text className="Poppins400 !text-sm !text-[--gray-300]">Discount</Text>
              <Text className="Poppins400 !text-sm !text-[--gray-300]">₹4000.00</Text>
            </Box>
            <Box className="!flex !justify-between !mt-6">
              <Text className="Poppins500 !text-2xl !leading-9 ">Total</Text>
              <Text className="Poppins500 !text-2xl !leading-9 ">₹7,400.00</Text>
            </Box>
            <Box className="!flex !justify-center">
              <PrimaryButton title="Proceed To Payment" className="!bg-[--saffron-400] !text-white !rounded-[10px] !w-full !text-base Poppins500 !py-3 !my-4" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscription;
