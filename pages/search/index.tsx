import React, { useEffect, useState } from "react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import PostItemComponent from "../../components/PostItemComponent";
import styles from "../../styles/Home.module.scss";
import Pagination from "@mui/material/Pagination";
import { IPost } from "../../models/Post";
import { getListPost, getListPostHaco } from "../../services/PostsService";
import { ResponseListPost } from "../../models/ResponseListPost";
import { useRouter } from "next/router";
import SearchComponent from "../../components/SearchComponent";
import { stringify } from "query-string";
import _ from "lodash";

function SearchPage() {
  const router = useRouter();
  const [listPost, setListPost] = useState<IPost[]>([]);

  const keyword: string = router.query.keyword
    ? (router.query.keyword as string)
    : "";

  useEffect(() => {
    async function fetchListPost() {
      console.log("useEffect keyword >>>> ", keyword);
      const posts: IPost[] = await getListPostHaco(keyword);
      console.log("response >>> ", posts);
      setListPost(posts);
    }

    fetchListPost();
  }, [keyword]);

  function updateSearchKeyword(keyW: string) {
    if (_.isEmpty(keyW)) {
      router.push(`/search`);
    } else {
      router.push(`/search?keyword=${keyW}`);
    }
  }

  return (
    <Layout>
      <div className={styles.rootContainer}>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div>
              {listPost.map((post, index) => (
                <div key={`post-${index}`}>
                  <PostItemComponent post={post} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.rightContainer}>
            <SearchComponent
              defaultKeyword={keyword}
              doSearch={updateSearchKeyword}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export const getStaticProps = async ({ context }: any) => {
//   console.log("context >>>> ", context.query);
//   const response = await getListPost(1000, 0);
//   const resListPost: ResponseListPost = {
//     pagination: response.meta,
//     listPost: response.data,
//   };
//   console.log(" pagination >>> ", JSON.stringify(resListPost.pagination));
//   return {
//     props: {
//       posts: resListPost.listPost,
//     },
//   };
// };

export default SearchPage;
