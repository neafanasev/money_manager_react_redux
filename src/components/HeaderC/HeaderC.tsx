import React, {memo} from 'react';
import {Burger, Header, MediaQuery, Text} from "@mantine/core";

type HeaderProps = {
    opened: boolean,
    color: any,
    onClick(): void
}

const HeaderC = ({opened, color, onClick}: HeaderProps) => (
    <Header height={{base: 50, md: 70}}
            p="md"
            sx={(theme) => ({
                backgroundColor: theme.fn.variant({variant: 'filled', color: theme.primaryColor})
                    .background,
            })}>
        <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
            <MediaQuery largerThan="sm" styles={{display: 'none'}}>
                <Burger
                    opened={opened}
                    color={color}
                    onClick={onClick}
                    size="sm"
                    mr="xl"
                />
            </MediaQuery>

            <Text fz="xl" fw={700}>Application header</Text>
        </div>
    </Header>
);

export default memo(HeaderC);