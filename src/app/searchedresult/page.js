import React from 'react';
import { Container, Box, Text } from '@chakra-ui/react';
import Title from '../../common/Title';
import PrimaryButton from '../../common/PrimaryButton';
import Ricebowl from "@/assets/svg/Ricebowl.svg";
import Ricebowl1 from "@/assets/svg/Ricebowl1.svg";
import Ricebowl2 from "@/assets/svg/Ricebowl2.svg";
import Ricebowl3 from "@/assets/svg/Ricebowl3.svg";
import Ricebowl4 from "@/assets/svg/Ricebowl4.svg";
import PriceSvg from "@/assets/svg/PriceSvg.svg"
import GroupSvg from "@/assets/svg/Group.svg";
import DishesCard from '../../common/DishesCard';
import Link from "next/link"

const SearchedResult = () => {
    const recommendedBowl = [
        { id: 0, imageSrc: Ricebowl, imageAlt: "food-image", title: "Paneer Tikka Rice Bowl", tag: "The Good Bowl", priceSrc: PriceSvg, PriceAlt: "price", price: "₹200", timeAlt: "time", timeSrc: GroupSvg, timeAlt: "time", time: "20 Mins" },
        { id: 1, imageSrc: Ricebowl1, imageAlt: "food-image", title: "Dal Fry Rice Bowl - Fried With Ghee", tag: "The Good Bowl", priceSrc: PriceSvg, PriceAlt: "price", price: "₹180", timeAlt: "time", timeSrc: GroupSvg, timeAlt: "time", time: "20 Mins" },
        { id: 2, imageSrc: Ricebowl2, imageAlt: "food-image", title: "Butter Paneer Rice Bowl Large", tag: "The Good Bowl", priceSrc: PriceSvg, PriceAlt: "price", price: "₹299", timeAlt: "time", timeSrc: GroupSvg, timeAlt: "time", time: "20 Mins" },
    ];
    const recommendedRiceBowl = [
        { id: 0, imageSrc: Ricebowl3, imageAlt: "food-image", title: "Paneer Signature Rice Bowl (Regular)", tag: "Fasso - Wraps & Bowls",  priceSrc: PriceSvg, PriceAlt: "price", price: "₹200", timeAlt: "time", timeSrc: GroupSvg, timeAlt: "time", time: "20 Mins" },
        { id: 1, imageSrc: Ricebowl3, imageAlt: "food-image", title: "Chicken Signature Rice Bowl", tag: "Fasso - Wraps & Bowls",  priceSrc: PriceSvg, PriceAlt: "price", price: "₹180", timeAlt: "time", timeSrc: GroupSvg, timeAlt: "time", time: "20 Mins" },
        { id: 2, imageSrc: Ricebowl4, imageAlt: "food-image", title: "Royal Chicken Rice Bowl (Jumbo)", tag: "Fasso - Wraps & Bowls",  priceSrc: PriceSvg, PriceAlt: "price", price: "₹299", timeAlt: "time", timeSrc: GroupSvg, timeAlt: "time", time: "20 Mins" },
    ];

    return (
        <Container maxW='84.4vw' mx="auto">
            <Box className="relative !mt-24">
                <Title title="Search results for “ Rice Bowls”" />
                <Box className="flex flex-row gap-5 my-12">
                    <PrimaryButton title="Dishes" className="bg-[--saffron-400] text-white Poppins500 text-base lg:px-[1.63vw] rounded-[10px] py-4 px-4" />
                    <PrimaryButton title="Restaurants" className="border border-[--saffron-400] text-[--black-400] Poppins500 text-base lg:px-[1.59vw] rounded-[10px] py-4 px-4" />
                </Box>
                <Box className="grid xl:grid-cols-3 lg:grid-cols-2 xl:!gap-16 lg:!gap-10 !gap-6">
                    {recommendedBowl.map((data) => (
                        <Link href="/restaurantPage/itemsPage">
                            <DishesCard
                                key={data.id}
                                imageSrc={data.imageSrc}
                                imageAlt={data.imageAlt}
                                priceSrc={data.priceSrc}
                                priceAlt={data.PriceAlt}
                                title={data.title}
                                tag={data.tag}
                                time={data.time}
                                timeAlt={data.timeAlt}
                                timeSrc={data.timeSrc}
                                price={data.price}
                            />
                        </Link>
                    ))}
                </Box>
                <Box className="!flex !flex-row-reverse !pt-2 !pb-16">
                    <Text className="!text-[--saffron-400] !text-base Poppins500 !cursor-pointer">View More &gt;</Text>
                </Box>
                <Box className="grid  xl:grid-cols-3 lg:grid-cols-2 xl:!gap-16 !gap-10 ">
                    {recommendedRiceBowl.map((data) => (
                        <Link href="/restaurantPage/itemsPage">
                            <DishesCard
                                 key={data.id}
                                 imageSrc={data.imageSrc}
                                 imageAlt={data.imageAlt}
                                 priceSrc={data.priceSrc}
                                 priceAlt={data.PriceAlt}
                                 title={data.title}
                                 tag={data.tag}
                                 time={data.time}
                                 timeAlt={data.timeAlt}
                                 timeSrc={data.timeSrc}
                                 price={data.price}
                            />
                        </Link>
                    ))}
                </Box>
                <Box className="!flex !flex-row-reverse !pt-2 !pb-28">
                    <Text className="!text-[--saffron-400] !text-base Poppins500 !cursor-pointer">View More &gt;</Text>
                </Box>
            </Box>
        </Container>
    );
};

export default SearchedResult;
