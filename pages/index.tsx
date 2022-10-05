import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import PostItemComponent from "../components/PostItemComponent";
import styles from "../styles/Home.module.scss";
import Pagination from "@mui/material/Pagination";
import { IPost } from "../models/Post";
import { getListPost, PER_PAGE } from "../services/PostsService";
import { ResponseListPost } from "../models/ResponseListPost";
import SearchComponent from "../components/SearchComponent";
import { useRouter } from "next/router";

function Home({
  posts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const totalPages = Math.ceil(pagination.total / pagination.limit);
  const router = useRouter();

  const handleChangePager = (page: number) => {
    console.log("handleChangePager >>>>> ", page);
    router.push(`/${page}`);
  };

  function updateSearchKeyword(keyword: string) {
    console.log("updateSarchKeyword >>> ", keyword);
    router.push(`/search?keyword=${keyword}`);
  }

  return (
    <Layout>
      <div className={styles.rootContainer}>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div>
              {posts.map((post, index) => (
                <div key={`post-${index}`}>
                  <PostItemComponent post={post} />
                </div>
              ))}
            </div>
            <div className={styles.paginationContainer}>
              <Pagination
                count={totalPages}
                variant="outlined"
                shape="rounded"
                onChange={(e, page) => handleChangePager(page)}
              />
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

export const getStaticProps = async () => {
  const response = await getListPost(PER_PAGE, 0);
  const resListPost: ResponseListPost = {
    pagination: response.meta,
    listPost: response.data,
  };
  console.log(" pagination >>> ", JSON.stringify(resListPost.pagination));
  return {
    props: {
      posts: resListPost.listPost,
      pagination: resListPost.pagination,
    },
  };
};

export default Home;
