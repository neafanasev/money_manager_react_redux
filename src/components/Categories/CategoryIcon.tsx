import React from 'react';
import {ICategoryProps} from "../../types/types";
import useCategoryIcon from "../../hooks/useCategoryIcon";
import {Box} from "@mantine/core";


const CategoryIcon = ({category, size}: ICategoryProps) => {
    const Icon = useCategoryIcon(category.iconName);

    return (
        <Box sx={() => ({
            backgroundColor: category.backgroundColor,
            color: category.iconColor,
            borderRadius: '50%',
            padding: size*0.1,
            width: size,
            height: size
        })}>
            <Icon color={category.iconColor} width='100%' height='100%' />
        </Box>
    );
};

export default CategoryIcon;