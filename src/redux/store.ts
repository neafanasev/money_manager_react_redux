import {configureStore} from '@reduxjs/toolkit';
import managerSlice from "./managerSlice";
import categoriesSlice from "./categoriesSlice";

const store = configureStore({
    reducer: {
        manager: managerSlice,
        categories: categoriesSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store