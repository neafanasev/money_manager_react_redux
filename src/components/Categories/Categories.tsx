import React, {memo} from 'react';
import Category from "./Category";

const Categories = () => {
    return (
        <div>
            <Category category={{name: 'food', type: 'expenses', backgroundColor: '#42aaff', iconColor: "#ffffff", iconName: 'food'}}
                      size='md'
            />
        </div>
    );
};

export default memo(Categories);