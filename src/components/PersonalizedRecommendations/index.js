"use client";
import React from 'react'
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import SubwaySvg from "@/assets/svg/SubwaySvg.svg"
import WrapSvg from "@/assets/svg/FoodImage7.svg"
import PizzaSvg from "@/assets/svg/PizzaSvg.svg"
import ChickenSaladSvg from "@/assets/svg/ChickenSaladSvg.svg"
import PriceSvg from "@/assets/svg/PriceSvg.svg"
import GroupSvg from "@/assets/svg/Group.svg"
import Title from '../../common/Title'
import Cards from '../../common/Card'
import { motion } from "framer-motion"

const PersonalizedRecommendations = () => {

    const recommendedFood = [
        { id: 0, imageSrc: WrapSvg, imageAlt: "food-image", title: "Baked Pizza Wrap - Vegetarian", tag: "Faasos - Wraps & Rolls", src: PriceSvg, alt: "price-image", subTitle: "₹209", subTitle2: "35 Mins", usersSrc: GroupSvg, usersAlt: "group-image" },
        { id: 1, imageSrc: PizzaSvg, imageAlt: "food-image", title: "Butter Chicken Pizza - 8 serve", tag: "Suren Pastries", src: PriceSvg, alt: "price-image", subTitle: "₹289", subTitle2: "25 Mins", usersSrc: GroupSvg, usersAlt: "group-image" },
        { id: 2, imageSrc: SubwaySvg, imageAlt: "food-image", title: "Mexican Patty Signature Wraps", tag: "Subway", src: PriceSvg, alt: "price-image", subTitle: "₹273", subTitle2: "32 Mins", usersSrc: GroupSvg, usersAlt: "group-image" },
        { id: 3, imageSrc: ChickenSaladSvg, imageAlt: "food-image", title: "Southwest Chicken Salad", tag: "Burgerito", src: PriceSvg, alt: "price-image", subTitle: "₹220", subTitle2: "41 Mins", usersSrc: GroupSvg, usersAlt: "group-image" },
    ]

    return (
        <Container maxW='84.4vw' mx="auto" className="!my-40">
            <Box>
                <Title title="Personalized recommendations" />
                <Box className="!grid lg:!grid-cols-4 md:!grid-cols-2 !gap-[5.3vw] !my-12">
                    {recommendedFood.map((data, i) => (
                        <motion.div
                            key={data.id}
                            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                        >
                            <Cards
                                key={data.id}
                                imageAlt={data.imageAlt}
                                imageSrc={data.imageSrc}
                                src={data.src}
                                alt={data.alt}
                                title={data.title}
                                subTitle={data.subTitle}
                                subTitle2={data.subTitle2}
                                tag={data.tag}
                                usersAlt={data.usersAlt}
                                usersSrc={data.usersSrc}
                                className="!bg-[--gray-100] "
                            />
                        </motion.div>
                    ))}
                </Box>
            </Box>
        </Container>
    )
}

export default PersonalizedRecommendations
