import React from 'react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const CartItem = ({ resturantName, itemName, price }) => {
    return (
        <Box>
            <Text className="Poppins500 !text-base !text-[--black-400] !pt-4 !pb-2">from <span className="Poppins500 !text-base !text-[--saffron-400]">{resturantName}</span></Text>
            <Box className="!flex !justify-between !py-2">
                <Box>
                    <Text className="Poppins500 !text-base !text-[--black-400]">{itemName}</Text>
                    <Text className="Poppins500 !text-base !text-[--gray-300]">{price}</Text>
                </Box>
                <Box className="!flex !flex-row !mt-3 !gap-4">
                    <Text className="!text-[--black-400]">-</Text>
                    <Text className="!text-[--black-400] !text-xl Poppins400">1</Text>
                    <Text className="!text-[--black-400]">+</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default CartItem
