import { createSlice } from "@reduxjs/toolkit";
import Grand from "../../Components/Grand";

const initialState = "Grand"

const grandSlice = createSlice({
    name:"grand", // Slice name (optional but recommended)
    initialState, // Initial state for this slice
    reducers:{
        
    }
})

export const {} = grandSlice.actions
export default grandSlice.reducer
