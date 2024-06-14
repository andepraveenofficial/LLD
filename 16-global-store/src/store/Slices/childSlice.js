import { createSlice } from "@reduxjs/toolkit";

const initialState = "Child"

const childSlice = createSlice({
    name:"child",
    initialState,
    reducers:{
        changeData(state, action){
            console.log(state, action)
            const data = action.payload
            console.log(data)
            return data
        }
    }

})

export const {changeData} = childSlice.actions;
export default childSlice.reducer;
