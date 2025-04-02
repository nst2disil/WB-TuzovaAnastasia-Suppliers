import { configureStore } from "@reduxjs/toolkit";
import suppliesReducer from './suppliesSlice';

export const store = configureStore({
    reducer: {
        supplies: suppliesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;