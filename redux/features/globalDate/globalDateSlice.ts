import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"



export const retrieveSomethingFromASpecificDate = createAsyncThunk("date/specificDay", async (date: Date) => {
    console.log(date)
})


const initialState = {
    globalDate: new Date(Date.now())
}


export const globalDateSlice = createSlice({
    name: "globalDate",
    initialState,
    reducers: {
        setGlobalDate: (state, action: PayloadAction<Date>) => {
            state.globalDate = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(retrieveSomethingFromASpecificDate.fulfilled, (state, action) => {

            })
    },
})

export const { setGlobalDate } = globalDateSlice.actions

export const selectGlobalDate = (state: RootState) => state.globalDate.globalDate

export default globalDateSlice.reducer