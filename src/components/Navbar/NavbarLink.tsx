import React, {memo} from 'react';
import {Flex} from "@chakra-ui/react";
import NavbarIcon from "./NavbarIcon";
import {INavbarLinkProps} from "../../types/types";

const NavbarLink = ({label, size, Icon, isActive}: INavbarLinkProps) => {
    return (
        <Flex direction='row'
              alignItems='center'
              width='100%'
              p={size*0.5 + 'px'}
              borderRadius={size*0.5 + 'px'}
              bgColor={isActive ? 'telegram.500' : 'telegram.700'}

              color='white'
              fontSize={size}
              fontWeight='300'
              lineHeight='1'
              textTransform='uppercase'

              transition='all .25s ease-in'
              _hover={{
                  bgColor: 'telegram.500',
                  transition: 'all .15s ease-out'
              }}
        >
            <NavbarIcon size={size*1.25} Icon={Icon}/>
            {label}
        </Flex>
    );
};

export default memo(NavbarLink);