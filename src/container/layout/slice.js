import { createAction, createSlice } from "@reduxjs/toolkit";

const sliceName = "LayoutSlice";

const rootSlice = createSlice({
    name: sliceName,
    initialState: {user: "", isLoading: null},
    reducers: {
        getUserFetch: (state, action) => {
            state.isLoading = true;
        },
        getUserFetched: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        }
    }
})

export const getUser = createAction(`${sliceName}/getUser`);

export const { actions, reducers } = rootSlice;
export default rootSlice.reducer;  

