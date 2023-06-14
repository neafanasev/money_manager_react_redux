import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'
import {IManagerState, TTransactionType} from "../types/types";

// export const initializeApp = createAsyncThunk(
//     'users/getUsers',
//     async (_, thunkAPI) => (
//         await axios.get('http://62.217.183.92:5000/get_users?number=500')
//             .then((res) => res.data)
//             .catch((err) => defaultUsersState)
//     )
// );


const initialState: IManagerState = {
    transactionType: 'expenses',
    periodStart: new Date(2023, 5, 14),
    periodEnd: new Date()
}

const managerSlice = createSlice({
    name: 'manager',
    initialState,
    reducers: {
        setTransactionType(state, action: PayloadAction<TTransactionType>) {
            state.transactionType = action.payload;
        },
    },
});

export const {setTransactionType} = managerSlice.actions
export default managerSlice.reducer;