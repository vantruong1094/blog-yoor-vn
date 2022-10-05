import React from "react";
import HeaderApp from "./HeaderApp";
import styles from "./styles/Layout.module.scss";
import NextLink from "next/link";
import { useRouter } from "next/router";

function Layout({ children }: any) {
  const router = useRouter();

  const handleClickBanner = () => {
    router.push("/");
  };

  return (
    <div>
      <HeaderApp />
      <div className={styles.headerApp}>
        <img src="header_image.jpeg" alt="" onClick={handleClickBanner} />
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
