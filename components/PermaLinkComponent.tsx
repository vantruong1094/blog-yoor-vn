import { Grid } from "@mui/material";
import React from "react";
import style from "./styles/PermaLinkComponent.module.scss";
import Icon from "@mui/material/Icon";
import { IPost } from "../models/Post";
import Link from "next/link";
import ImageApp from "./ImageApp";

type Props = {
  permaPosts: IPost[];
  hideLeftItem?: boolean;
  hideRightItem?: boolean;
};

function PermaLinkComponent({
  permaPosts,
  hideLeftItem = false,
  hideRightItem = false,
}: Props) {
  function leftComponent() {
    if (hideLeftItem) {
      return null;
    }

    const post = permaPosts[0];

    return (
      <Grid item xs={6}>
        <Link href={`/posts/${post.id}`}>
          <a>
            <div className={style.permaLinkContainer}>
              <div className={style.preContainer}>
                <Icon>keyboard_arrow_left_icon</Icon>
              </div>
              <div className={style.permaLinkContentContainer}>
                <div className={style.permaLinkImageContainer}>
                  <ImageApp src={post.urlImage} />
                </div>
                <div className={style.permaLinkTitle}>{post.title}</div>
              </div>
            </div>
          </a>
        </Link>
      </Grid>
    );
  }

  function rightComponent() {
    if (hideRightItem) {
      return null;
    }

    const post = hideLeftItem ? permaPosts[0] : permaPosts[1];

    return (
      <Grid item xs={6}>
        <Link href={`/posts/${post.id}`}>
          <a>
            <div className={style.permaLinkContainer}>
              <div className={style.permaLinkContentContainer}>
                <div className={style.permaLinkImageContainer}>
                  <ImageApp src={post.urlImage} />
                </div>
                <div className={style.permaLinkTitle}>{post.title}</div>
              </div>
              <div className={style.preContainer}>
                <Icon>keyboard_arrow_right_icon</Icon>
              </div>
            </div>
          </a>
        </Link>
      </Grid>
    );
  }

  return (
    <div>
      <Grid container spacing={0} py={2}>
        {leftComponent()}
        {rightComponent()}
      </Grid>
    </div>
  );
}

export default PermaLinkComponent;
