import React, {useState} from 'react';
import {Flex} from "@chakra-ui/react";

import {AiOutlineHome} from "react-icons/ai";
import NavbarLink from "./NavbarLink";
import {IconCategory2, IconDeviceDesktopAnalytics, IconHome2} from "@tabler/icons-react";
import {INavbarData} from "../../types/types";
import {BiCategoryAlt} from "react-icons/bi";
import {IoAnalyticsOutline} from "react-icons/io5";

const Navbar = () => {
    const [isActive, setIsActive] = useState('home');
    const mockData: INavbarData[] = [
        {Icon: AiOutlineHome, label: 'Home', link: '/'},
        {Icon: BiCategoryAlt, label: 'Categories', link: '/categories/'},
        {Icon: IoAnalyticsOutline, label: 'Analytics', link: '/'},
        // { icon: IconSettings, label: 'Settings' },
    ];

    return (
        <Flex direcion='column'
              wrap='wrap'
              alignContent='start'
              width='320px'
              height='100vh'
              bgColor='telegram.700'
              padding='20px 10px'
              position='fixed'
        >
            {mockData.map((item) => (
                <NavbarLink key={item.label}
                            size={32}
                            Icon={item.Icon}
                            label={item.label}
                            isActive={isActive == item.label}
                />
            ))}

        </Flex>
    );
};

export default Navbar;