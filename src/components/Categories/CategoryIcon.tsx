import React, {memo} from 'react';
import {ICategoryProps} from "../../types/types";
import useCategoryIcon from "../../hooks/useCategoryIcon";

const CategoryIcon = ({category, size}: ICategoryProps) => {
    const Icon = useCategoryIcon(category.iconName);

    return (
        <div>
            тут иконка
        </div>
    )
    // return (
    //     <Box sx={() => ({
    //         backgroundColor: category.backgroundColor,
    //         color: category.iconColor,
    //         borderRadius: '50%',
    //         padding: size*0.1,
    //         width: size,
    //         height: size
    //     })}>
    //         <Icon color={category.iconColor} width='100%' height='100%' />
    //     </Box>
    // );
};

export default memo(CategoryIcon);