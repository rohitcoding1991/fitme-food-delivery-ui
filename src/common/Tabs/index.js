"use client";
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Tabs, TabList, Tab, TabPanel, TabPanels, TabIndicator } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import Image from 'next/image';
import Calender2 from '@/assets/svg/Calender2.svg';

const TabTable = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const tabsData = [
        { id: 0, tab: '16:30', src: Calender2, alt:"image" },
        { id: 1, tab: '24 hrs' },
    ];

    return (
        <Box>
            <Tabs
                position="relative"
                variant="unstyled"
                className="flex flex-row gap-2"
                index={selectedIndex}
                onChange={(index) => setSelectedIndex(index)}
            >
                <TabList>
                    {tabsData.map((data) => (
                        <Tab key={data.id}>
                            <Image src={data?.src}  alt={data?.alt}/>
                            <Text className={`${data.id % 2 === 0 ? 'text-[--gray-300]' : 'text-[--saffron-400]'} ml-2`}>{data.tab}</Text>
                        </Tab>
                    ))}
                </TabList>
                <TabIndicator mt="1.5px" height="2px" bg="#808080" borderRadius="1.5px" />
            </Tabs>
        </Box>
    );
};

export default TabTable;
