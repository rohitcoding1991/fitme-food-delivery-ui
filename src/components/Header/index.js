import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';
import Logo from '@/assets/svg/Subtract.svg';
import Image from 'next/image';
import SearchBar from '@/common/SearchBar';
import SearchIcon from '@/assets/svg/SearchIcon.svg';
import PrimaryButton from '@/common/PrimaryButton';
import BagIcon from "@/assets/svg/Bag.svg"

const Header = () => {
    return (
        <Box className="mt-[25px] !sticky !top-0 !right-0 !left-0 !bg-white !z-20">
            <Container maxW="83.99vw" mx="auto">
                <Box className="flex justify-between !py-4">
                    <Box className="!flex !flex-row !gap-2">
                        <Box className="!mt-[6px]">
                            <Image src={Logo} alt="Logo" />
                        </Box>
                        <Text variant="h3" className="Poppins700 text-[28px]">
                            FitMe
                        </Text>
                    </Box>
                    <Box className="!flex !flex-row !gap-5">
                        <SearchBar className="font-medium text-base" src={SearchIcon} InputRightClass="!mt-1" _placeholder={{ color: "#808080", fontSize: "16px" }} InputGroupClass="!w-[24.4vw] !py-[3px] !rounded-[10px] !hidden lg:!inline md:!inline" size="lg" alt="search-icon" placeholder="Enter item or restaurant you are looking for" />
                        <Image src={BagIcon} alt="bag-icon" className="lg:!inline !hidden"/>
                        <PrimaryButton className="!bg-[--black-400] !text-white lg:!px-[1.4vw] !my-[3px] lg:!py-0 !py-3 !px-4 !font-semibold !text-sm !rounded-[10px]" title="Sign In" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
