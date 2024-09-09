import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    activeFilter : ""
}


const filterSlice = createSlice({

    name:"filter",
    initialState,

    reducers: {
        setFilter : (state , action)=>{
            if (state.activeFilter === action.payload) {
                state.activeFilter = "";
              } else {
                state.activeFilter = action.payload; // Set the clicked filter
              }
        }
    }

})



export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;