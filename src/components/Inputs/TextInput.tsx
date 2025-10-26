import { Stack, TextField, TextFieldProps, Typography } from "@mui/material";
import React from "react";

const TextInput: React.FC<TextFieldProps> = (props) => {
  return (
    <Stack alignItems={"start"} gap={0.5} width={"fit-content"}>
      {Boolean(props.value) && (
        <Typography color={`${props.color}.contrastText`} fontWeight={700}>
          {props.label}
        </Typography>
      )}
      <TextField
        color={props.color ?? "primary"}
        variant="outlined"
        {...props}
        label={undefined}
      />
    </Stack>
  );
};

export default TextInput;
