"use client";

import { Stack } from "@mui/material";
import { useEffect } from "react";

import Header from "@/layouts/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    //TODO create storage hook
    localStorage.setItem("name", "Ramiro");
  }, []);

  return (
    <Stack spacing={1}>
      <Header />
      <Stack padding={"0 1rem 0.75rem"}>{children}</Stack>
    </Stack>
  );
}
