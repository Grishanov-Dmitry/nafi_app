"use client";

import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import Image from "next/image";

import logo from "../../assets/logo.svg";

import "./header.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserName } from "../../redux/slices/selectors";
import { changeLogIn } from "@/app/redux/slices/mainSlice";

export const Header = () => {
  const dispatch = useAppDispatch();

  const userName = useAppSelector(getUserName);

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const logoutUser = () => {
    dispatch(changeLogIn(false));
  };
  return (
    <header>
      <Image width="200" height="200" src={logo} alt="Follow us on Twitter" />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
      >
        <Tab label="контакты" icon={<PersonPinIcon fontSize="small" />} />
        <Tab
          label="расширенный поиск"
          icon={<ContentPasteSearchIcon fontSize="small" />}
        />
        <Tab
          label="учетные записи"
          icon={<ManageAccountsIcon fontSize="small" />}
        />
        <Tab label="подборка" icon={<BookmarkAddedIcon fontSize="small" />} />
      </Tabs>

      <div className="exitBlock">
        <Button
          color="secondary"
          className="exitButton"
          onClick={logoutUser}
          startIcon={<LogoutIcon fontSize="medium" htmlColor="var(--black)" />}
        >
          Выход
        </Button>
        <p className="userName">{userName}</p>
      </div>
    </header>
  );
};
