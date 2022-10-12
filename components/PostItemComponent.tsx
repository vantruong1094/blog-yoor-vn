import React from "react";
import styles from "./styles/PostItem.module.scss";
import { IPost } from "../models/Post";
import _ from "lodash";
import Link from "next/link";
import { Formater } from "../utils/constants";
import moment from "moment";
import ImageApp from "./ImageApp";

type Props = {
  post: IPost;
  redrectDetail: (id: string) => void;
};

const PostItemComponent = ({ post, redrectDetail }: Props) => {
  return (
    <div>
      <div className={styles.dateContainer}>
        <div className={styles.dateStyle}>
          {moment(post.updatedAt).format(Formater.dateFormter)}
        </div>
      </div>
      <div className={styles.titlePost} onClick={() => redrectDetail(post.id)}>
        {post.title}
      </div>
      <div>
        <div className={styles.underlinePost}></div>
      </div>
      {_.isEmpty(post.urlImage) ? (
        <div />
      ) : (
        <div className={styles.imageContainer}>
          <Link href={`/posts/${post.id}`}>
            <a>
              <ImageApp src={post.urlImage} />
            </a>
          </Link>
        </div>
      )}
      <div className={styles.contentPost}>{post.subContent}</div>
      <div className={styles.buttonContainer}>
        <Link href={`/posts/${post.id}`}>
          <a>
            <button className={styles.buttonStyle}>READ MORE</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostItemComponent;
