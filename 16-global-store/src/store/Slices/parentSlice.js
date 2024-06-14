import { createSlice } from "@reduxjs/toolkit";

const initialState = "parent"

const parentSlice = createSlice({
    name:"parent",
    initialState,
    reducers:{}
})

export const {} = parentSlice.actions
export default parentSlice.reducer
