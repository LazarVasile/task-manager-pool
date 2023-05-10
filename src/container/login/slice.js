import { createAction, createSlice } from "@reduxjs/toolkit";

const sliceName = "LoginSlice";

const rootSlice = createSlice({
    name: sliceName,
    initialState: [],
    reducers: {
        actionFetch: (state, action) => {
        },
        actionFetched: (state, action) => {
        }
    }
})

export const sagaFunction = createAction(`${sliceName}/sagaFunction`);

export const {actions} = rootSlice.actions;
export default rootSlice.reducer;  

