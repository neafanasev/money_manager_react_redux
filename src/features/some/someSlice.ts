import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'

// export const initializeApp = createAsyncThunk(
//     'users/getUsers',
//     async (_, thunkAPI) => (
//         await axios.get('http://62.217.183.92:5000/get_users?number=500')
//             .then((res) => res.data)
//             .catch((err) => defaultUsersState)
//     )
// );

export interface SomeState {
    someField: boolean
}

const initialState: SomeState = {
    someField: false,
}

const someSlice = createSlice({
    name: 'some',
    initialState,
    reducers: {
        someReducer(state: SomeState, action: PayloadAction<boolean>) {
            state.someField = action.payload;
        },
    },
});

export const {someReducer} = someSlice.actions
export default someSlice.reducer;