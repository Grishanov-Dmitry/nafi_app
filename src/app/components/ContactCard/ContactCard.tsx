import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  IconButton,
  TextareaAutosize,
  Typography,
} from "@mui/material";

interface FormData {
  name: string;
  organization: string;
  position: "";
  phone: string;
  email: string;
  comment: string;
}

export const ContactCard = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    position: "",
    phone: "",
    email: "",
    comment: "",
  });

  const [hasReadRules, setHasReadRules] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHasReadRules(event.target.checked);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSave = () => {
    console.log({ formData, hasReadRules });
  };

  return (
    <Dialog maxWidth="md" fullWidth open={true} className="p-1">
      <DialogContent className="p-7 flex flex-col">
        <Typography variant="h4">Карточка эксперта</Typography>
        {/* <IconButton
        edge="end"
        color="inherit"
        // onClick={handleClose}
        aria-label="close"
        style={{ position: "absolute", top: 0, right: 0 }}
      /> */}
        <TextField
          label="ФИО"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Организация"
          variant="outlined"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Должность"
          variant="outlined"
          name="position"
          value={formData.position}
          onChange={handleChange}
          // fullWidth
          margin="normal"
        />
        <TextField
          label="Телефон"
          variant="outlined"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          // fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          // fullWidth
          margin="normal"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={hasReadRules}
              onChange={handleCheckboxChange}
              name="hasReadRules"
              color="primary"
            />
          }
          label="Отметьте, если контакты эксперта были переданы Заказчиком и их нельзя использовать для других исследований"
        />

        <Typography variant="caption">
          Укажите дополнительную информацию об эксперте, проекты, в которых он
          давал интервью, историю общения и другую информацию, которую в будущем
          можно учитывать при рекруте
        </Typography>
        <TextareaAutosize
          minRows={10}
          placeholder="Комментарий"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          style={{
            // flex: 1,
            width: "100%",
            // height: "50px",
            marginTop: "16px",
            padding: "8px",
            minHeight: "100px",
            border: "1px solid silver",
            borderRadius: "5px",
          }}
        />

        <DialogActions className="flex justify-between alain-center">
          <Button color="secondary">Delete</Button>
          <Button color="primary" onClick={onSave}>
            Save
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
