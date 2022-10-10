import React from "react";
import HeaderApp from "./HeaderApp";
import styles from "./styles/Layout.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import FooterApp from "./FooterApp";

function Layout({ children }: any) {
  const router = useRouter();

  const handleClickBanner = () => {
    router.push("/");
  };

  return (
    <div>
      <HeaderApp />
      <div className={styles.headerApp}>
        <Link href={"/"} passHref>
          <a>
            <img src="/header_image.jpeg" alt="" />
          </a>
        </Link>
      </div>
      <main>{children}</main>
      <FooterApp />
    </div>
  );
}

export default Layout;
