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
import { useEffect, useState } from "react";
import ListRelativePosts from "../../components/ListRelativePosts";
import PermaLinkComponent from "../../components/PermaLinkComponent";
import _ from "lodash";
import SocialShareComponent from "../../components/SocialShareComponent";

type Props = {
  post: IPost;
  relativePosts: IPost[];
};

type PermaLinkProp = {
  posts: IPost[];
  hideLeftItem: boolean;
  hideRightItem: boolean;
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

function PostDetailPage({ post, relativePosts }: Props) {
  const router = useRouter();
  const [permaLinkPosts, setPermaLinkPosts] = useState<PermaLinkProp>({
    posts: [],
    hideLeftItem: true,
    hideRightItem: true,
  });

  function updateSearchKeyword(keyword: string) {
    console.log("updateSarchKeyword >>> ", keyword);
    router.push(`/search?keyword=${keyword}`);
  }

  function renderPermaLinkPost() {
    if (_.isEmpty(permaLinkPosts)) {
      return null;
    }

    return (
      <PermaLinkComponent
        permaPosts={permaLinkPosts.posts}
        hideLeftItem={permaLinkPosts.hideLeftItem}
        hideRightItem={permaLinkPosts.hideRightItem}
      />
    );
  }

  useEffect(() => {
    async function fetchPermaLinkPost() {
      let posts: IPost[] = await getListPostHaco({});

      const postIndex = posts.findIndex((obj) => obj.id === post.id);
      console.log("findIndex >>>> ", postIndex);

      if (postIndex === 0 && posts.length > 1) {
        setPermaLinkPosts({
          posts: [posts[1]],
          hideLeftItem: true,
          hideRightItem: false,
        });
      } else if (postIndex === posts.length - 1) {
        setPermaLinkPosts({
          posts: [posts[posts.length - 2]],
          hideLeftItem: false,
          hideRightItem: true,
        });
      } else {
        setPermaLinkPosts({
          posts: [posts[postIndex - 1], posts[postIndex + 1]],
          hideLeftItem: false,
          hideRightItem: false,
        });
      }
    }

    fetchPermaLinkPost();
  }, [post]);

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
              <SocialShareComponent post={post} />
            </div>
            <div>
              <ListRelativePosts listPost={relativePosts} />
            </div>
            <div>{renderPermaLinkPost()}</div>
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
  console.log("getStaticPaths >>>>> ");

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
