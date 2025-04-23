import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';
import Image from 'next/image';
import LogoIcon from '@/assets/svg/LogoSvg.svg';
import TwitterIcon from '@/assets/svg/twittericon.svg';
import FacebookIcon from '@/assets/svg/facebookicon.svg';
import InstagramIcon from '@/assets/svg/Instagram.svg';

const Footer = () => {
    const text = [{ id: 0, title: 'About us' }, { id: 1, title: 'Delivery' }, { id: 2, title: 'Help & Support' }, { id: 3, title: 'T&C' }];
    const image = [{ id: 0, src: FacebookIcon, alt: 'facebook-icon' }, { id: 1, src: InstagramIcon, alt: 'instagram-icon' }, { id: 2, src: TwitterIcon, alt: 'twitter-icon' }];

    return (
        <Box className="bg-[--saffron-400] !h-[313px] !flex !justify-center !items-center">
            <Container maxW="79.9vw" mx="auto">
                <Box className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mb-8">
                    <Image src={LogoIcon} alt="logo-icon" className="mb-4 lg:mb-0 mr-7 lg:mr-0" />
                    <Box className="flex flex-col lg:flex-row gap-3 lg:gap-6">
                        {text.map((data) => (
                            <Text key={data.id} className="Poppins500 text-base text-white text-center lg:text-left">{data.title}</Text>
                        ))}
                    </Box>
                    <Box className="text-center mt-5">
                        <Text className="Poppins500 text-white text-sm">Contact:<span className="Poppins700 text-white text-base"> +91 1234567899</span></Text>
                    </Box>
                </Box>
                <Box className="flex justify-center gap-3">
                    {image.map((data) => (
                        <Image key={data.id} src={data.src} alt={data.alt} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
