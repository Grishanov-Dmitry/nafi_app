import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export interface IState {
  isLoged: boolean;
  userName: string;
}

const initialState: IState = {
  isLoged: false,

  userName: 'Тимур Аймалетдинов',
};

const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
      setUserName(state, { payload }) {
        state.userName = payload;
      },
      changeLogIn(state, { payload }) {
        state.isLoged = payload;
      },
    },
  });

export const { setUserName, changeLogIn } = commonSlice.actions;

export default commonSlice.reducer;
