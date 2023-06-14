import {memo, useState} from 'react';
import {createStyles, Navbar, Stack} from '@mantine/core';
import {IconHome2, IconDeviceDesktopAnalytics, IconCategory2, IconSettings, IconLogout} from '@tabler/icons-react';
import NavbarLink from "./NavbarLink";

export interface MockData {
    Icon: React.FC<any>,
    label: string
    link: string
}

type MockDataArr = MockData[];

const mockData: MockDataArr = [
    {Icon: IconHome2, label: 'Home', link: '/'},
    {Icon: IconCategory2, label: 'Categories', link: '/categories/'},
    {Icon: IconDeviceDesktopAnalytics, label: 'Analytics', link: '/'},
    // { icon: IconSettings, label: 'Settings' },
];

const NavbarC = ({hidden}) => {
    const [active, setActive] = useState(0);
    const links = mockData.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <Navbar
            width={{base: 80}}
            p="md"
            sx={(theme) => ({
                backgroundColor: theme.fn.variant({variant: 'filled', color: theme.primaryColor})
                    .background,
                border: 0
            })}
            hidden={hidden}
            hiddenBreakpoint="sm"
        >
            <Navbar.Section grow>
                <Stack justify="center" spacing={0}>
                    {links}
                </Stack>
            </Navbar.Section>
        </Navbar>
    );
};

export default memo(NavbarC);