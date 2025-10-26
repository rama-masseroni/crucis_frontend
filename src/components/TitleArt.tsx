import { Stack, Typography } from "@mui/material";

import styles from "../styles/page.module.css";

export default function TitleArt() {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Crucis EKG logo"
        className={styles.logo}
        src="/assets/svg/ekg_line.svg"
      />
      <Typography style={{ zIndex: 10 }} variant="title">
        CRUCIS
      </Typography>
    </Stack>
  );
}
