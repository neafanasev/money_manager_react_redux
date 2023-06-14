import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'
import {ICategoriesState, ICategory} from "../types/types";

const initialState: ICategoriesState = {
    categoriesList: [
        {type: 'expenses', name: 'home', backgroundColor: '#ffff00', iconColor: "#000000", iconName: 'home'},
        {name: 'food', type: 'expenses', backgroundColor: '#42aaff', iconColor: "#ffffff", iconName: 'food'},
        {name: 'transport', type: 'expenses', backgroundColor: '#ff0000', iconColor: "#ffffff", iconName: 'transport'},
    ]
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory(state, action: PayloadAction<ICategory>) {
            state.categoriesList.push(action.payload);
        },
    },
});

export const {addCategory} = categoriesSlice.actions
export default categoriesSlice.reducer;