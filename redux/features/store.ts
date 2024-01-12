import { configureStore } from '@reduxjs/toolkit'
import globalDateReducer from './globalDate/globalDateSlice'


export const store = configureStore({
    reducer: {
        globalDate: globalDateReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch