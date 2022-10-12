import Image from "next/image";
import React from "react";
import styles from "./styles/Image.module.scss";

type Props = {
  src: string;
};

function ImageApp({ src }: Props) {
  return <Image src={src} layout="fill" objectFit="cover" alt="" />;
}

export default ImageApp;
