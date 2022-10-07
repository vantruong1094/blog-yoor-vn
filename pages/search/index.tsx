import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import PostItemComponent from "../../components/PostItemComponent";
import styles from "../../styles/Home.module.scss";
import { IPost } from "../../models/Post";
import { getListPostHaco } from "../../services/PostsService";
import { useRouter } from "next/router";
import SearchComponent from "../../components/SearchComponent";
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
      const posts: IPost[] = await getListPostHaco({
        keyword: keyword,
        limit: 1000,
        category: null,
      });
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

  function redrectDetailPage(id: string) {
    router.push(`/posts/${id}`);
  }

  return (
    <Layout>
      <div className={styles.rootContainer}>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div className={styles.resultSearchContainer}>
              <span>&quot;{keyword}&quot;</span>
              の検索結果を表示しています
            </div>
            <div>
              {listPost.map((post, index) => (
                <div key={`post-${index}`}>
                  <PostItemComponent
                    post={post}
                    redrectDetail={redrectDetailPage}
                  />
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

export default SearchPage;
