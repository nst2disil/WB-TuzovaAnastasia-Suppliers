import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import suppliesReducer from './suppliesSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        supplies: suppliesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;