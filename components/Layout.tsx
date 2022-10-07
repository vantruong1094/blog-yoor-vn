import React from "react";
import HeaderApp from "./HeaderApp";
import styles from "./styles/Layout.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

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
      <div className={styles.footerApp}>
        <Link href={"https://blog.seesaa.jp/"} passHref>
          <a>
            <svg
              width="70px"
              height="14px"
              viewBox="0 0 70 14"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group-27" fill="#FFFFFF">
                <path
                  d="M11.3383133,0 L11.3383133,2.70975904 L3.8626506,2.70975904 C3.8626506,2.70975904 2.65915663,2.90963855 2.65915663,4.16373494 C2.65915663,5.4186747 4.02120482,5.46674699 4.02120482,5.46674699 L7.96313253,5.46674699 C7.96313253,5.46674699 11.2910843,6.15240964 11.3383133,9.55710843 C11.3872289,13.0731325 7.62578313,13.4956627 7.62578313,13.4956627 L0,13.4956627 L0,10.7859036 L6.92325301,10.7361446 C6.92325301,10.7361446 8.57289157,10.8179518 8.57289157,9.48204819 C8.57289157,8.14698795 7.31204819,8.1739759 7.31204819,8.1739759 L3.28662651,8.11831325 C3.28662651,8.11831325 0,7.42168675 0,4.06337349 C0,0.463012048 3.73951807,0 3.73951807,0 L11.5381928,0"
                  id="Fill-8"
                ></path>
                <path
                  d="M15.8461446,6.20048193 L19.81,6.20048193 C19.81,6.20048193 19.2263855,4.14433735 16.5486747,4.14433735 C13.8709639,4.14433735 13.4383133,6.77481928 13.4383133,7.75566265 C13.4383133,8.45819277 14.5448193,10.7226506 16.2593976,10.7226506 C17.9739759,10.7226506 19.1859036,9.60686747 19.1859036,9.60686747 L21.0101205,11.2059036 C21.0101205,11.2059036 19.6463855,13.1692771 16.3985542,13.1692771 C14.5018072,13.1692771 10.9638554,11.3180723 10.9638554,7.64096386 C10.9638554,3.9613253 14.0185542,1.68674699 16.4483133,1.68674699 C21.7438554,1.68674699 22.3561446,6.4526506 22.3561446,6.4526506 L22.3561446,8.76096386 L14.8425301,8.76096386 L15.8461446,6.20048193 Z"
                  id="Fill-10"
                ></path>
                <path
                  d="M48.9156627,7.5726506 C48.9156627,8.49277108 49.6637349,9.24 50.5846988,9.24 C51.5056627,9.24 52.2520482,8.49277108 52.2520482,7.5726506 C52.2520482,6.65 51.5056627,5.90361446 50.5846988,5.90361446 C49.6637349,5.90361446 48.9156627,6.65 48.9156627,7.5726506"
                  id="Fill-12"
                ></path>
                <path
                  d="M57.316506,13.2004819 L56.1821687,6.87518072 C56.1501205,6.55807229 56.0961446,6.24686747 56.0143373,5.94662651 L53.7785542,7.37951807 C53.7785542,7.40060241 53.780241,7.42253012 53.780241,7.44361446 C53.780241,9.27879518 52.2908434,10.7673494 50.456506,10.7673494 C48.6213253,10.7673494 47.1327711,9.27879518 47.1327711,7.44361446 C47.1327711,5.60759036 48.6213253,4.12072289 50.456506,4.12072289 C51.7806024,4.12072289 52.9233735,4.89493976 53.4572289,6.01578313 L55.516747,4.69674699 C54.5418072,2.90457831 52.64,1.68674699 50.456506,1.68674699 C47.276988,1.68674699 44.6987952,4.26409639 44.6987952,7.44361446 C44.6987952,10.6222892 47.276988,13.2004819 50.456506,13.2004819 C52.0546988,13.2004819 53.500241,12.5493976 54.5418072,11.4977108 L54.8580723,13.2004819 L57.316506,13.2004819 Z"
                  id="Fill-14"
                ></path>
                <path
                  d="M61.5662651,7.5726506 C61.5662651,8.49277108 62.313494,9.24 63.2353012,9.24 C64.1562651,9.24 64.903494,8.49277108 64.903494,7.5726506 C64.903494,6.65 64.1562651,5.90361446 63.2353012,5.90361446 C62.313494,5.90361446 61.5662651,6.65 61.5662651,7.5726506"
                  id="Fill-16"
                ></path>
                <path
                  d="M69.9662651,13.2004819 L68.830241,6.87518072 C68.7990361,6.55807229 68.7442169,6.24686747 68.6640964,5.94662651 L66.4257831,7.37951807 C66.4257831,7.40060241 66.4283133,7.42253012 66.4283133,7.44361446 C66.4283133,9.27879518 64.9406024,10.7673494 63.1045783,10.7673494 C61.2693976,10.7673494 59.7808434,9.27879518 59.7808434,7.44361446 C59.7808434,5.60759036 61.2693976,4.12072289 63.1045783,4.12072289 C64.4295181,4.12072289 65.5722892,4.89493976 66.106988,6.01578313 L68.1656627,4.69674699 C67.1907229,2.90457831 65.289759,1.68674699 63.1045783,1.68674699 C59.9250602,1.68674699 57.3493976,4.26409639 57.3493976,7.44361446 C57.3493976,10.6222892 59.9250602,13.2004819 63.1045783,13.2004819 C64.7027711,13.2004819 66.1474699,12.5493976 67.1907229,11.4977108 L67.506988,13.2004819 L69.9662651,13.2004819 Z"
                  id="Fill-18"
                ></path>
                <path
                  d="M28.4959036,6.20048193 L32.459759,6.20048193 C32.459759,6.20048193 31.8761446,4.14433735 29.1984337,4.14433735 C26.5207229,4.14433735 26.0880723,6.77481928 26.0880723,7.75566265 C26.0880723,8.45819277 27.1945783,10.7226506 28.9091566,10.7226506 C30.6245783,10.7226506 31.8356627,9.60686747 31.8356627,9.60686747 L33.6607229,11.2059036 C33.6607229,11.2059036 32.296988,13.1692771 29.0483133,13.1692771 C27.1515663,13.1692771 23.6144578,11.3180723 23.6144578,7.64096386 C23.6144578,3.9613253 26.6683133,1.68674699 29.0980723,1.68674699 C34.3944578,1.68674699 35.0059036,6.4526506 35.0059036,6.4526506 L35.0059036,8.76096386 L27.4931325,8.76096386 L28.4959036,6.20048193 Z"
                  id="Fill-20"
                ></path>
                <path
                  d="M45.0091566,1.68674699 L45.0091566,3.97819277 L38.6889157,3.97819277 C38.6889157,3.97819277 37.6701205,4.14771084 37.6701205,5.2086747 C37.6701205,6.26795181 38.8221687,6.30843373 38.8221687,6.30843373 L42.1560241,6.30927711 C42.1560241,6.30927711 44.9703614,6.8886747 45.0091566,9.76879518 C45.0513253,12.7416867 41.8701205,13.0984337 41.8701205,13.0984337 L35.4216867,13.0984337 L35.4216867,10.8078313 L41.2763855,10.7656627 C41.2763855,10.7656627 42.6704819,10.8339759 42.6704819,9.7046988 C42.6704819,8.57542169 41.6053012,8.59903614 41.6053012,8.59903614 L38.2006024,8.55096386 C38.2006024,8.55096386 35.4216867,7.96228916 35.4216867,5.1226506 C35.4216867,2.07807229 38.5843373,1.68674699 38.5843373,1.68674699 L45.1803614,1.68674699"
                  id="Fill-22"
                ></path>
              </g>
            </svg>
            <svg
              width="47px"
              height="17px"
              viewBox="0 0 47 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#FFFFFF">
                <polygon
                  id="Fill-1"
                  points="13.4470298 2.5938862 10.4299596 16.1257634 18.7547316 16.0630967 19.5496088 13.4912897 13.9846439 13.5259213 16.4245211 2.5938862"
                ></polygon>
                <path
                  d="M46.2087509,2.59363884 L45.6010491,5.11927042 C39.5677333,4.6047441 37.9911719,6.45670901 37.3983123,8.58325287 C35.8720491,14.0517441 42.5641895,12.9872353 42.5641895,12.9872353 L42.7736281,10.4566564 L40.596786,10.3098845 L40.7839614,7.87825287 L45.8814,7.92525287 L45.2266982,14.8936213 C45.2266982,14.8936213 44.7591719,15.9218494 40.549786,15.9218494 C35.7796982,15.9234985 33.8617684,13.2568669 34.0951193,9.14148094 C34.3292947,5.02527042 37.8674877,3.20134059 40.0979263,2.59363884 C42.3258912,1.98511252 46.2087509,2.59363884 46.2087509,2.59363884"
                  id="Fill-2"
                ></path>
                <path
                  d="M9.15180702,6.7714441 C9.15180702,6.7714441 10.8042281,8.0660055 10.7102281,9.70275989 C10.5288246,12.8781459 6.54866667,13.759602 5.65978947,13.7554792 C4.81791228,13.7521809 0,13.8643213 0,13.8643213 L2.65591228,0.536110766 C2.65591228,0.536110766 6.68884211,0.000145853767 8.60677193,0.473444099 C9.90380702,0.793373924 11.3187544,1.40849673 11.2725789,3.6694441 C11.2255789,5.92956691 9.15180702,6.7714441 9.15180702,6.7714441 Z M5.47261404,2.03186515 L4.67773684,5.7737248 C4.67773684,5.7737248 8.56059649,5.7737248 8.46659649,3.98030375 C8.36517544,2.05990024 5.47261404,2.03186515 5.47261404,2.03186515 Z M3.45326316,11.4796897 C3.45326316,11.4796897 6.36561404,12.0304967 7.39714035,9.71430375 C8.27942105,7.73783006 4.21433333,7.67433884 4.21433333,7.67433884 L3.45326316,11.4796897 Z"
                  id="Combined-Shape"
                ></path>
                <path
                  d="M27.3112877,6.33976262e-05 C32.2248491,0.0206774327 33.7684281,3.06083533 33.3256386,6.59573006 C32.8309018,10.5437301 29.6810772,13.9664845 26.2360596,14.2319932 C22.7910421,14.497502 19.9710421,11.1761687 20.4385684,7.22404585 C20.9530947,2.87365989 23.6914632,-0.015603269 27.3112877,6.33976262e-05 Z M30.1065509,7.79051954 C30.7274456,5.29127392 29.7569368,2.89922129 27.9387789,2.44736164 C26.1189719,1.99550199 24.1408491,3.6553441 23.5199544,6.15458971 C22.9007088,8.65548445 23.8695684,11.0467125 25.6902,11.4993967 C27.5091825,11.9512564 29.4873053,10.2905897 30.1065509,7.79051954 Z"
                  id="Combined-Shape"
                ></path>
              </g>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Layout;
