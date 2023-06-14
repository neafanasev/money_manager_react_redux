import React, {memo} from 'react';
import {createStyles, MantineTheme, rem, SimpleGrid} from "@mantine/core";

const useStyles = createStyles((theme: MantineTheme) => ({
    tabList: {
        border: 0,
        backgroundColor: theme.colors.blue[3]
    },

    tab: {
        borderRadius: 0,
        border: 0,
        borderBottom: `4px solid ${theme.colors.blue[6]}`,
        padding: rem(12),

        fontSize: rem(24),
        letterSpacing: 3,
        textTransform: 'uppercase',
        textAlign: 'center',
        color: theme.colors.gray[0],

        '&:hover': {
            backgroundColor: theme.colors.blue[4]
        },
        '&:focus': {
            outline: 0
        },
    },

    active: {
        backgroundColor: theme.colors.blue[6],
        textDecoration: 'underline',

        '&:hover': {
            backgroundColor: theme.colors.blue[6]
        }
    }
}));

const SelectTransactionType = ({onClick, active}) => {
    const {classes, cx} = useStyles();

    return (
        <SimpleGrid className={classes.tabList} cols={2} spacing={0}>
            {['expenses', 'income'].map((item) => (
                <div key={item}
                     className={cx(classes.tab, {[classes.active]: active == item})}
                     onClick={onClick}
                >
                    {item}
                </div>
            ))}
        </SimpleGrid>
    )
};

export default memo(SelectTransactionType);