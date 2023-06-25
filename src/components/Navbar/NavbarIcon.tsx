import React, {memo} from 'react';
import {Box} from "@chakra-ui/react";
import {INavbarIconProps} from "../../types/types";

const NavbarIcon = ({Icon, size}: INavbarIconProps) => (
    <Box fontSize={size + 'px'} marginRight={size*0.5 + 'px'}>
        <Icon/>
    </Box>
);

export default memo(NavbarIcon);