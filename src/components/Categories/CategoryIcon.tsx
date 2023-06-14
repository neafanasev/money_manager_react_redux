import React from 'react';
import {ICategory} from "../../types/types";
import useCategoryIcon from "../../hooks/useCategoryIcon";
import {Box, createStyles} from "@mantine/core";


const CategoryIcon = ({category, key}: {category: ICategory, key: any}) => {
    const Icon = useCategoryIcon(category.iconName);

    return (
        <Box key={key} sx={(theme) => ({
            backgroundColor: category.backgroundColor,
            color: category.iconColor
        })}>
            <Icon color={category.iconColor} />
        </Box>
    );
};

export default CategoryIcon;