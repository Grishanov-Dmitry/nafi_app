import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

import "./AddContactBlock.css";

export const AddContactBlock = () => (
  <div className="addContactBlock">
    <Stack spacing={2} direction="row">
      <Button variant="contained">Добавить Контакт</Button>
      <Button variant="contained">Импортировать Контакты</Button>
    </Stack>
  </div>
);
