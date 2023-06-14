import {createStyles, Group, Paper, SimpleGrid, Text, rem, Stack} from '@mantine/core';
import {
    IconUserPlus,
    IconDiscount2,
    IconReceipt2,
    IconCoin,
    IconArrowUpRight,
    IconArrowDownRight,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    value: {
        fontSize: rem(24),
        fontWeight: 700,
        lineHeight: 1,
    },

    diff: {
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
    },

    title: {
        fontWeight: 700,
        textTransform: 'uppercase',
    },
}));

interface StatsGridProps {
    data: {
        title: string,
        icon: string,
        value: string,
        diff: number
    }
}

const StatsGrid = ({data}: StatsGridProps) => {
    const {classes} = useStyles();
    const DiffIcon = data.diff > 0 ? IconArrowUpRight : IconArrowDownRight;
    const diffColor = data.diff > 0 ? 'teal' : 'red'

    return (
        <Group position='center'>
            <Text className={classes.value}>{data.value}</Text>
            <Text color={diffColor} fz="sm" fw={500} className={classes.diff}>
                <span>{data.diff}%</span>
                <DiffIcon size="1rem" stroke={1.5}/>
            </Text>
        </Group>
    );
}

export default StatsGrid;