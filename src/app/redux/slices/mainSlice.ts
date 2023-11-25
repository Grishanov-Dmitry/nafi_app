import { IContact } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

export interface IState {
  isLogged: boolean;
  userName: string;
  contacts: IContact[]
}

const initialState: IState = {
  isLogged: false,

  userName: 'Тимур Аймалетдинов',
  contacts: [
    {
      name: "Dzmitry Some",
      organization: "BFS solution",
      position: "Engineer",
      expertise: "Cars",
      phone: "+37529 1111111",
      phoneSecond: "",
      email: "someEmail@.com",
      emailSecond: "",
      comment: "Can work with him",
    },
    {
      name: "Alex Some",
      organization: "BFS Global",
      position: "Engineer",
      expertise: "Cars",
      phone: "+37529 1111111",
      phoneSecond: "",
      email: "someEmail@.com",
      emailSecond: "",
      comment: "Crazy person",
    }
  ]
};

const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
      setUserName(state, { payload }) {
        state.userName = payload;
      },
      changeLogIn(state, { payload }) {
        state.isLogged = payload;
      },
    },
  });

export const { setUserName, changeLogIn } = commonSlice.actions;

export default commonSlice.reducer;
