import {configureStore} from '@reduxjs/toolkit';
import managerSlice from "./manager/managerSlice";

const store = configureStore({
    reducer: {
        manager: managerSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store