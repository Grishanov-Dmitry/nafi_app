import { RootState } from "../store";

const getCommonState = (state: RootState) => state.common;

export const getIsLogged = (state: RootState) => getCommonState(state).isLogged;

export const getUserName = (state: RootState) => getCommonState(state).userName;
