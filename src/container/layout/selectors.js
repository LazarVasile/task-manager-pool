import { createSelector } from "reselect";

const selectedUser = state => state.layoutReducer.user;
export const selectUser = createSelector([selectedUser], user => user)

const selectedIsLoading = state => state.layoutReducer.isLoading;
export const selectIsLoading = createSelector([selectedIsLoading], isLoading => isLoading)