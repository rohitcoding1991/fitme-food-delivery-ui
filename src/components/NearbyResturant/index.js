"use client";
import React from 'react'
import Title from '../../common/Title'
import Cards from '../../common/Card'
import { Container, Box } from '@chakra-ui/react'
import FoodImage1 from "@/assets/svg/FoodImage1.svg"
import FoodImage2 from "@/assets/svg/FoodImage2.svg"
import FoodImage3 from "@/assets/svg/FoodImage3.svg"
import FoodImage4 from "@/assets/svg/FoodImage4.svg"
import StarSvg from "@/assets/svg/Star.svg"
import GreenStar from "@/assets/svg/GreenStar.svg"
import GroupSvg from "@/assets/svg/Group.svg"
import UsersSvg from "@/assets/svg/Users.svg"
import { motion } from "framer-motion"

const NearbyResturant = () => {

    const nearbyResturant = [
        { id: 0, imageSrc: FoodImage1, imageAlt: "food-image", starSrc: GreenStar, starAlt: "star-image", title: "Ramachandra Parlour", tag: "South Indian", rating: "4.0", src: GroupSvg, alt: "group-image", subTitle: "30 Mins", subTitle2: "200 for two", usersSrc: UsersSvg, usersAlt: "users-image" },
        { id: 1, imageSrc: FoodImage2, imageAlt: "food-image", starSrc: StarSvg, starAlt: "star-image", title: "Uma Parlour - Pure Vegetarian", tag: "South Indian", rating: "3.2", src: GroupSvg, alt: "group-image", subTitle: "20 Mins", subTitle2: "150 for two", usersSrc: UsersSvg, usersAlt: "users-image" },
        { id: 2, imageSrc: FoodImage3, imageAlt: "food-image", starSrc: GreenStar, starAlt: "star-image", title: "Swap - Diet Meal Box", tag: "Healthy Food, Salads", rating: "4.5", src: GroupSvg, alt: "group-image", subTitle: "40 Mins", subTitle2: "300 for two", usersSrc: UsersSvg, usersAlt: "users-image" },
        { id: 3, imageSrc: FoodImage4, imageAlt: "food-image", starSrc: GreenStar, starAlt: "star-image", title: "The Good Bowl - Traditional Bowls", tag: "North Indian, Punjabi", rating: "4.8", src: GroupSvg, alt: "group-image", subTitle: "25 Mins", subTitle2: "250 for two", usersSrc: UsersSvg, usersAlt: "users-image" },
    ]

    return (
        <Box className="!flex !justify-center !items-center">
            <Container maxW='84.4vw' mx="auto">
                <Title title="Nearby Resturant" />
                <motion.div
                    initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Box className="!grid lg:!grid-cols-2 md:!grid-cols-2 !grid-cols-1 !gap-6 !my-8">
                        {nearbyResturant.map((data) => (
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
                                rating={data.rating}
                                usersAlt={data.usersAlt}
                                usersSrc={data.usersSrc}
                                starAlt={data.starAlt}
                                starSrc={data.starSrc}
                                className="!bg-[--gray-100] "
                            />
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    )
}

export default NearbyResturant
