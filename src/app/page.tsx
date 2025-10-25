"use client";
import { Typography } from "@mui/material";

import styles from "../styles/page.module.css";
export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/login");
  //   }, 3000);
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <div className={styles.page}>
        <main className={styles.main}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Crucis EKG logo"
            className={styles.logo}
            src="/assets/svg/ekg_line.svg"
          />
          <Typography style={{ zIndex: 10 }} variant="title">
            CRUCIS
          </Typography>
        </main>
      </div>
    </div>
  );
}
