import { configureStore } from "@reduxjs/toolkit";
import { suppliesReducer, supplyFormReducer } from './suppliesSlice';

export const store = configureStore({
    reducer: {
        supplies: suppliesReducer,
        supplyForm: supplyFormReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;