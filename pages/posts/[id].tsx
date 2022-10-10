import type {
  InferGetStaticPropsType,
  NextPage,
  GetStaticProps,
  GetServerSideProps,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.scss";
import { IPost } from "../../models/Post";
import {
  getPostIds,
  getPostById,
  getListPost,
  getListPostHaco,
} from "../../services/PostsService";
import { ResponseListPost } from "../../models/ResponseListPost";
import SearchComponent from "../../components/SearchComponent";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import PostDetailInfo from "../../components/PostDetailInfo";
import { useEffect } from "react";
import ListRelativePosts from "../../components/ListRelativePosts";
import PermaLinkComponent from "../../components/PermaLinkComponent";

type Props = {
  post: IPost;
  relativePosts: IPost[];
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

function PostDetailPage({ post, relativePosts }: Props) {
  const router = useRouter();

  function updateSearchKeyword(keyword: string) {
    console.log("updateSarchKeyword >>> ", keyword);
    router.push(`/search?keyword=${keyword}`);
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className={styles.rootContainer}>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div>
              <PostDetailInfo post={post} />
            </div>
            <div>
              <ListRelativePosts listPost={relativePosts} />
            </div>
            <div>
              <PermaLinkComponent />
            </div>
          </div>
          <div className={styles.rightContainer}>
            <SearchComponent defaultKeyword="" doSearch={updateSearchKeyword} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = await getPostIds();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, IParams> = async (
  context
) => {
  const params = context.params as IParams;
  console.log("post detail params >>>>> ", params);

  const post: IPost = await getPostById(params.id);
  const relativePostsReq = getListPostHaco({
    keyword: null,
    limit: 8,
    category: post.category[0],
  });

  const response = await Promise.all([relativePostsReq]);

  return {
    props: {
      post,
      relativePosts: response[0],
    },
    revalidate: 5,
  };
};

export default PostDetailPage;
