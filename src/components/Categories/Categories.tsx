import React, {memo} from 'react';
import Category from "./Category";
import {useAppSelector} from "../../hooks";

const Categories = () => {
    const categories = useAppSelector((state) => state.categories.categoriesList)

    return (
        <div>
            {categories.map((category) =>
                <Category key={category.name}
                          category={category}
                          size={80}/>
            )}
        </div>
    );
};

export default memo(Categories);