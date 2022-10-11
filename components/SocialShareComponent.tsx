import React from "react";
import styles from "./styles/SocialShareComponent.module.scss";

import {
  FacebookShareButton,
  FacebookIcon,
  HatenaShareButton,
  HatenaIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
import { IPost } from "../models/Post";

type Props = {
  post: IPost;
};

function SocialShareComponent({ post }: Props) {
  const urlShare = `${process.env.NEXT_PUBLIC_HOST}/posts/${post.id}`;

  return (
    <div className={styles.shareContainer}>
      <TwitterShareButton url={urlShare} title={`${post.title}\n`}>
        <div className={styles.shareItemContainer}>
          <TwitterIcon size={24} round={false} />
        </div>
      </TwitterShareButton>
      <FacebookShareButton url={urlShare} title={`${post.title}\n`}>
        <div className={styles.shareItemContainer}>
          <FacebookIcon size={24} round={false} />
        </div>
      </FacebookShareButton>
      <HatenaShareButton url={urlShare} title={`${post.title}\n`}>
        <div className={styles.shareItemContainer}>
          <HatenaIcon size={24} round={false} />
        </div>
      </HatenaShareButton>
    </div>
  );
}

export default SocialShareComponent;
