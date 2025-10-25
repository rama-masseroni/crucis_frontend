"use client";
import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";

import { rootTheme } from "../styles/muiGiobals";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Crucis</title>
      </head>

      <body>
        <ThemeProvider theme={rootTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
