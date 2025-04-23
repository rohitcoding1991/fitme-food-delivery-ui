import React from 'react'
import { Box } from '@chakra-ui/react'
import LocationTitle from '../../common/LocationTitle'
import LocationCard from '../../common/LocationCard'
import LocationSvg from "@/assets/svg/LocationSvg.svg"
import WhiteLocation from "@/assets/svg/WhiteLocation.svg"
import GrayLocation from "@/assets/svg/GrayLocation.svg"

const DeliveryAddress = () => {
    return (
        <Box>
            <LocationTitle title="Delivery address" src={LocationSvg} alt="location-image" />
            <Box className="!flex lg:!flex-row  md:!flex-row !flex-col lg:!gap-12 !gap-8 !mb-5">
                <LocationCard
                    address="Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad, Telangana"
                    className="!bg-[--saffron-400] !my-5"
                    src={WhiteLocation}
                    textClass="!text-white"
                />
                <LocationCard
                    address="Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad, Telangana"
                    className="!border-dashed !border-2 !border-[--saffron-400] !my-5"
                    src={GrayLocation}
                    textClass="!text-[--gray-400]"
                />
            </Box>
        </Box>
    )
}

export default DeliveryAddress
