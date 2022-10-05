import React from "react";
import styles from "./styles/PostItem.module.scss";
import { IPost } from "../models/Post";

type Props = {
  post: IPost;
};

const PostItemComponent: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <div className={styles.dateContainer}>
        <div className={styles.dateStyle}>2022年07月26日</div>
      </div>
      <div className={styles.titlePost}>{post.title}</div>
      <div>
        <div className={styles.underlinePost}></div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://yoor-blog.up.seesaa.net/image/E8B5A4E794B0E5A4AAE9838EE6A798E794BBE5838F.png"
          alt=""
        />
      </div>
      <div className={styles.contentPost}>{post.content}</div>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonStyle}>READ MORE</button>
      </div>
    </div>
  );
};

export default PostItemComponent;
