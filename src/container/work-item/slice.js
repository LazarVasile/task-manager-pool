import { createAction, createSlice } from "@reduxjs/toolkit";

const sliceName = "workitem";
const initialState = {workItem: ""};

const workItemSlice = createSlice({
    name: sliceName,
    initialState: initialState,
    reducers: {

    }
})
export const getWorkItemDetails = createAction(`${sliceName}/getWorkItemDetails`);

export default workItemSlice.reducer;
