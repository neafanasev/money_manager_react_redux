import React, {memo} from 'react';
import {ICategoryProps} from "../../types/types";
import {Stack} from "@mantine/core";
import CategoryIcon from "./CategoryIcon";

const Category = ({category, size}: ICategoryProps) => {
    return (
        <Stack align='center' width='max-content'>
            <CategoryIcon category={category}/>
        </Stack>
    );
};

export default memo(Category);