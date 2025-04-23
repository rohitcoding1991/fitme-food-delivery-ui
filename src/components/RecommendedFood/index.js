"use client";
import React from 'react'
import Title from '../../common/Title'
import Cards from '../../common/Card'
import { Container, Box } from '@chakra-ui/react'
import FoodImage1 from "@/assets/svg/FoodImage5.svg"
import FoodImage2 from "@/assets/svg/FoodImage6.svg"
import FoodImage3 from "@/assets/svg/FoodImage7.svg"
import FoodImage4 from "@/assets/svg/FoodImage8.svg"
import GroupSvg from "@/assets/svg/Group.svg"
import PriceSvg from "@/assets/svg/PriceSvg.svg"
import { motion } from "framer-motion"

const RecommendedFood = () => {

    const recommendedFood = [
        { id: 0, imageSrc: FoodImage1, imageAlt: "food-image", title: "Paneer Tikka Rice Bowl", tag: "The Good Bowl", src: PriceSvg, alt: "price-image", subTitle: "₹200", subTitle2: "20 Mins", usersSrc: GroupSvg, usersAlt: "group-image" },
        { id: 1, imageSrc: FoodImage2, imageAlt: "food-image", title: "Aloo Paratha Curd Meal (2 pcs)", tag: "Lunch Box", src: PriceSvg, alt: "price-image", subTitle: "₹169", subTitle2: "25 Mins", usersSrc: GroupSvg, usersAlt: "group-image" },
        { id: 2, imageSrc: FoodImage3, imageAlt: "food-image", title: "Baked Pizza Wrap - Vegetarian", tag: "Faasos - Wraps & Rolls", src: PriceSvg, alt: "price-image", subTitle: "₹209", subTitle2: "35 Mins", usersSrc: GroupSvg, usersAlt: "group-image" },
        { id: 3, imageSrc: FoodImage4, imageAlt: "food-image", title: "Mixed Veg Fried Rice with dry fruits", tag: "MFC Restaurant", src: PriceSvg, alt: "price-image", subTitle: "₹180", subTitle2: "45 Mins", usersSrc: GroupSvg, usersAlt: "group-image" },
    ]


    return (
        <Box className="!flex !justify-center !items-center">
            <Container maxW='84.4vw' mx="auto">
                <Title title="Recommended Food Items" />
                <motion.div
                    initial={{ opacity: 0, translateX: 50, translateY: 50 }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Box className="!grid lg:!grid-cols-2 md:!grid-cols-2 !grid-cols-1 !gap-6 !my-8">
                        {recommendedFood.map((data) => (
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
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    )
}

export default RecommendedFood
