import { RootState } from "../store";

const getCommonState = (state: RootState) => state.common;

export const getIsLoged = (state: RootState) => getCommonState(state).isLoged;

export const getUserName = (state: RootState) => getCommonState(state).userName;
