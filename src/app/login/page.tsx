"use client";
import { Container, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { MainButton } from "@/components/Buttons";
import TextInput from "@/components/Inputs/TextInput";
import TitleArt from "@/components/TitleArt";

import styles from "../../styles/login.module.css";

export default function Page() {
  const router = useRouter();
  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const isFormEmpty = !logInData.username || !logInData.password;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    router.push("/test");
    alert(`Logging in with ${logInData}`);
  };

  const handleRegister = () => {};

  return (
    <Container
      className={styles.page}
      sx={{
        gap: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TitleArt />
      <Stack alignItems={"center"} gap={2} minWidth={"fit-content"}>
        <TextInput
          color="disabled"
          label="E-Mail"
          placeholder="Ingrese su e-mail"
          type="email"
          value={logInData.username}
          onChange={(e) =>
            setLogInData({ ...logInData, username: e.target.value })
          }
        />
        <TextInput
          color="disabled"
          label="Contraseña"
          placeholder="Ingrese su contraseña"
          type="password"
          value={logInData.password}
          onChange={(e) =>
            setLogInData({ ...logInData, password: e.target.value })
          }
        />
      </Stack>
      <Stack gap={2} width={"100%"}>
        <MainButton disabled={isFormEmpty} onClick={handleSubmit}>
          Iniciar Sesión
        </MainButton>
        <MainButton variant="outlined" onClick={handleRegister}>
          Registrarse
        </MainButton>
      </Stack>
    </Container>
  );
}
