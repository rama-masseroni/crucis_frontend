import { Button, ButtonProps } from "@mui/material";
import React from "react";

const MainButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      fullWidth
      color={props.color ?? "primary"}
      variant="contained"
      {...props}
    />
  );
};

export default MainButton;
