import React, {memo} from 'react';
import {ICategoryProps} from "../../types/types";
import {Box, Text} from "@mantine/core";
import CategoryIcon from "./CategoryIcon";

const Category = ({category, size}: ICategoryProps) => {
    return (
        <Box sx={() => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            width: size*1.5,
            padding: size*0.1
        })}>
            <CategoryIcon category={category} size={size}/>
            <Box sx={() => ({
                paddingTop: size*0.08
            })}>
                <Text size={size*0.15}
                      transform='uppercase'
                      weight={700}
                      lineClamp={2}
                      inline
                      align='center'
                >
                    {category.name}
                </Text>
            </Box>

        </Box>
    );
};

export default memo(Category);