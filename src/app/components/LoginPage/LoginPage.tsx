import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

import "./LoginPage.css";
import { useAppDispatch } from "@/app/redux/hooks";
import { changeLogIn } from "@/app/redux/slices/mainSlice";

const tempUserCreds = {
  login: "user",
  password: "asdq124asrqw",
};

export const LoginPage = ({}) => {
  const dispatch = useAppDispatch();

  const [creds, setCreds] = useState({
    login: "",
    password: "",
  });

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    console.log(creds);

    const value = target.value;
    const ariaLabel = target.getAttribute("aria-label") || "";

    setCreds({
      ...creds,
      [ariaLabel]: value,
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      creds.login === tempUserCreds.login &&
      creds.password === tempUserCreds.password
    ) {
      dispatch(changeLogIn(true));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          paddingTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Введите логин и пароль
        </Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={onSubmit}>
          <TextField
            value={creds.login}
            margin="normal"
            fullWidth
            label="Username"
            inputProps={{ "aria-label": "login" }}
            onChange={onChange}
          />
          <TextField
            value={creds.password}
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            inputProps={{ "aria-label": "password" }}
            onChange={onChange}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
