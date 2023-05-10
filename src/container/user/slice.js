import { createAction } from "@reduxjs/toolkit";

const sliceName = "UserSlice";

export const getUserDetails = createAction(`${sliceName}/getUserDetails`);

