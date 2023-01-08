import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "../Reducers/themeReducer";

const rootReducer = {
   themeReducer,
}

export const store = configureStore({
   reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>