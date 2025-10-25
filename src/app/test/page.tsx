"use client";
import { Container, Stack } from "@mui/material";

export default function TestCanvasPage() {
  return (
    <Stack maxWidth={480} spacing={2}>
      <Container sx={{ flex: 2, border: "1px solid blue" }} />
      <Container sx={{ flex: 3, border: "1px solid red" }} />
      <Container sx={{ flex: 1, border: "1px solid green" }} />
    </Stack>
  );
}
