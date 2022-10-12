import { Box, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import { IPost } from "../models/Post";
import ImageApp from "./ImageApp";
import style from "./styles/ListRelativePosts.module.scss";

type Props = {
  listPost: IPost[];
};

function ListRelativePosts({ listPost }: Props) {
  function RelativePostComp(post: IPost) {
    return (
      <Grid item xs={3}>
        <Link href={`/posts/${post.id}`}>
          <a>
            <div>
              <div className={style.imageContainer}>
                <ImageApp src={post.urlImage} />
              </div>
              <div className={style.titlePost}>{post.subContent}</div>
            </div>
          </a>
        </Link>
      </Grid>
    );
  }

  return (
    <div className={style.categoryContainer}>
      <div className={style.titleCategory}>関連する記事</div>
      <div>
        <Grid container spacing={2} paddingTop={"8px"}>
          {listPost.map((post) => RelativePostComp(post))}
        </Grid>
      </div>
    </div>
  );
}

export default ListRelativePosts;
