import { createSlice } from "@reduxjs/toolkit";

const sliceName = "root";

const rootSlice = createSlice({
    name: sliceName,
    initialState: [{"test": "test"}],
    reducers: {
        getCurrentUserFetch: (state, action) => {
            state.test = "test1";
        },
        getCurrentUserFetched: (state, action) => {
            state.test = "test1";
        }
    }
})

export const {actions} = rootSlice.actions;
export default rootSlice.reducer;  