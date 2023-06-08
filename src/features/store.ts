import { configureStore } from '@reduxjs/toolkit';
import someSlice from "./some/someSlice";

const store = configureStore({
    reducer: {
        someSlice
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch