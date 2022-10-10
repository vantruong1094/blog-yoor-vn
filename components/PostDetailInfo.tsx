import React from "react";
import styles from "./styles/PostDetailInfo.module.scss";
import { IPost } from "../models/Post";
import { DataNode } from "domhandler";
import _ from "lodash";
import parse, { Element, HTMLReactParserOptions } from "html-react-parser";

type Props = {
  post: IPost;
};

const PostDetailInfo = ({ post }: Props) => {
  // let content = _.replace(post.content, "<strong>", "<h4><strong>");
  // content = _.replace(content, "</strong>", "</strong></h4>");
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === "code") {
        if (domNode.children[0] as DataNode) {
          const node = domNode.children[0] as DataNode;
          console.log("dom data >>>>>> ", node.data);
          return <h5>{node.data}</h5>;
        }
      }
    },
  };

  return (
    <div>
      <div className={styles.dateContainer}>
        <div className={styles.dateStyle}>2022年07月26日</div>
      </div>
      <div className={styles.titlePost}>{post.title}</div>
      <div>
        <div className={styles.underlinePost}></div>
      </div>
      <div className={styles.subContentPost}>{post.subContent}</div>
      {_.isEmpty(post.urlImage) ? (
        <div />
      ) : (
        <div className={styles.imageContainer}>
          <img src={post.urlImage} alt="" />
        </div>
      )}
      <div className={styles.contentPost}>{parse(post.content, options)}</div>
    </div>
  );
};

export default PostDetailInfo;
